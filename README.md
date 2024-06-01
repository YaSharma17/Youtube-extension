# YouTube Auto Pause Extension

YouTube Auto Pause is a Chrome extension that automatically pauses a YouTube video when you switch tabs or windows, and resumes it when you return to the YouTube tab.

## Features

- Automatically pauses the video when you switch to another tab or window.
- Automatically resumes the video when you return to the YouTube tab.

## Installation

1. **Clone or Download the Repository:**

    ```sh
    git clone https://github.com/YaSharma17/Youtube-extension.git
    ```

    Or download the ZIP file and extract it.

2. **Open Chrome and navigate to the Extensions page:**

    Open Chrome and go to `chrome://extensions/`.

3. **Enable Developer Mode:**

    Enable "Developer mode" using the toggle in the top right corner.

4. **Load the Unpacked Extension:**

    Click "Load unpacked" and select the directory where you cloned or extracted the repository.

## Usage

1. Open YouTube and start playing a video.
2. Switch to another tab or window, and the video will automatically pause.
3. Return to the YouTube tab, and the video will automatically resume playing.

## Files

- `manifest.json`: Describes the extension and its permissions.
- `background.js`: Handles tab and window events to pause and play the video.
- `content.js`: Interacts with the YouTube video player to pause and play the video based on visibility changes.

## Contributing

If you have suggestions for improving this extension, feel free to open an issue or submit a pull request.

