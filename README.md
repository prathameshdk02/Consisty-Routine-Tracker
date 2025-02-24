# Consisty - Routine Tracker

**Consisty** is a simple Chrome extension that helps you log your daily activities and track the time spent on them.

## Features
- Add activities with time spent.
- View a list of recorded routines.
- Data is stored in local storage for persistence.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/prathameshdk02/Consisty-Routine-Tracker.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Consisty-Routine-Tracker/frontend/
   ```
3. Install dependencies using npm.
   ```sh
   npm i
   ```
5. Build the extension.
   ```sh
   npm run build
   ```
7. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" in the top-right corner.
   - Click "Load unpacked" and select the `dist` folder inside the project.

## Usage
- Click on the extension icon to open the tracker.
- Add a new routine by entering an activity name and time spent.
- The app automatically saves your routines in local storage.
- Data remains persistent even after closing the browser.

## Future Improvements
- Implement database storage.
- Add visual analytics for activity tracking.
- User authentication for personalized routines.

## License
This project is licensed under the MIT License.

