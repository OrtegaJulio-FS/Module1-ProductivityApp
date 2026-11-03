# Module 1 — Focus productivity app

## Run

1. Install Node.js 20.19+ (Node 22 LTS recommended).
2. In a terminal, enter the `ProductivityApp` folder.
3. Run `npm install`, then `npx expo install --check`.
4. Run `npm run web` for the browser.
5. Run `npm start` for the QR code. Open it with a compatible Expo Go on your phone, on the same Wi-Fi network. The project has been upgraded to SDK 58 to match the Expo Go installed on the test iPhone.
6. `npm run typecheck` checks TypeScript. `npm run export:web` checks web bundling.

## Features

- Create tasks with title, description, and High/Medium/Low priority.
- Mark complete/incomplete, search titles/descriptions, and filter All/Active/Completed.
- Confirm before deleting; total and completed counts update after saved changes.
- Three required Router screens plus a separate setup verification screen.
- Save name and theme; dark mode is the selected enhanced feature.
- NativeWind styling, responsive layout, labeled inputs, keyboard-operable web controls.
- Errors appear in the UI; failed writes do not silently change the displayed task state.
