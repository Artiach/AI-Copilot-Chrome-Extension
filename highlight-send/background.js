chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.text) {
        // Get the webhook URL from Chrome's storage
        chrome.storage.sync.get('webhookUrl', function(data) {
            const webhookUrl = data.webhookUrl;

            if (webhookUrl) {
                // Send the request to the configured webhook URL
                fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ text: request.text })
                })
                .then(response => response.json())
                .then(data => console.log('Success:', data))
                .catch((error) => console.error('Error:', error));
            } else {
                console.error('Webhook URL not set. Please configure it in the extension settings.');
            }
        });
    }
});
