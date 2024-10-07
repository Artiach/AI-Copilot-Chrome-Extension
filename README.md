# AI-Copilot-Chrome-Extension
This Chrome extension allows users to highlight text on a web page, send it along with a user-defined prompt to a specified webhook, and display the response from the webhook on the page. The extension is designed for seamless integration with web services that can process text and return results.
## Features

Text Highlighting: Allows you to select and highlight any text on a web page.
Prompt Integration: Adds a user-defined prompt to the highlighted text.
Webhook Communication: Sends the highlighted text and prompt to a webhook URL.
Response Handling: Waits for a response from the webhook and displays the result on the page.

## Installation

Clone or download this repository.
Open Google Chrome and go to chrome://extensions/.
Enable Developer mode (toggle switch in the top-right corner).
Click on Load unpacked.
Select the folder containing the downloaded files for this extension.
The extension should now be installed and visible in your browser.

## Usage

Highlight Text: Navigate to any webpage and highlight the text you want to send.
Right-Click Menu: Right-click the highlighted text and choose the extension option (e.g., "Send to Webhook").
Enter Prompt: A popup will appear asking for the user-defined prompt.
Send Request: The highlighted text and prompt are sent to the webhook.
View Response: The extension waits for the webhook response and then displays the result on the page.

## Configuration

Before using the extension, you need to configure the webhook URL:

Open the extension's settings by right-clicking the extension icon and selecting Options.
Enter your desired webhook URL in the input field and save your changes.

## Technical Details

Webhook URL: This URL should accept POST requests with a payload containing the highlighted text and the prompt.
Response Format: The webhook should return a JSON response containing the processed result, which will be displayed on the webpage.

### Example Request Payload

```bash
json

{
  "text": "This is the highlighted text from the webpage.",
  "prompt": "Explain this text in simpler terms."
}
```

Example Response from Webhook

```bash
json

{
  "response": "This text is about explaining something in simpler language."
}
```
