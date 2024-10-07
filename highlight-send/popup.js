document.getElementById('sendButton').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value; // Obtén el valor del input del usuario
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getSelectionText,
    }, async (injectionResults) => {
        const selectedText = injectionResults[0].result;
        
        if (selectedText) {
            const payload = {
                selectedText: selectedText,
                userInput: userInput // Incluye el input del usuario en el payload
            };

            try {
                const response = await fetch('https://hook.eu2.make.com/zc5jj4szxt8mt8n7i57mlmwb2uaj9869', { // URL del webhook
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const responseData = await response.json(); // Asumiendo que la respuesta es JSON
                    document.getElementById('status').textContent = 'Sent successfully!';

                    // Si el servidor devuelve un texto, muéstralo
                    if (responseData && responseData.returnedText) {
                        document.getElementById('responseText').textContent = responseData.returnedText;
                    }
                } else {
                    document.getElementById('status').textContent = 'Failed to send.';
                }
            } catch (error) {
                document.getElementById('status').textContent = 'Error occurred: ' + error;
                console.error('Error:', error); // Imprime el error en la consola
            }
        } else {
            document.getElementById('status').textContent = 'No text selected.';
        }
    });
});

function getSelectionText() {
    return window.getSelection().toString();
}
