document.getElementById('save').addEventListener('click', function() {
    const url = document.getElementById('webhookUrl').value;
    chrome.storage.sync.set({ webhookUrl: url }, function() {
        alert('Webhook URL saved!');
    });
});

// Load the saved webhook URL when the options page is opened
chrome.storage.sync.get('webhookUrl', function(data) {
    if (data.webhookUrl) {
        document.getElementById('webhookUrl').value = data.webhookUrl;
    }
});
