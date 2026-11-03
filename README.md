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

## Storage and version decisions
This project began with the SDK 54 stack supplied in Exercise 1.5 and was upgraded to SDK 58 because the current iPhone Expo Go rejected SDK 54. The storage and NativeWind verification features remain the same.

Native tasks use parameterized SQLite statements. Native name/theme settings use Expo SecureStore. Web tasks and settings use AsyncStorage, as prescribed by Exercise 1.5's platform-aware storage proxy. Browser storage is not encrypted. Data is local per device/browser, with no sync. Assignment 1.6 also says “same data storage approach across platforms”; if this means literal SQLite on web, ask the instructor before submission. Expo SQLite web requires additional WASM and cross-origin-isolation setup.

## Test procedure — execute on BOTH platforms
1. Open Setup tests and run all storage tests. Inspect color squares, shapes, text and borders.
2. Add three tasks, one at each priority, including a description.
3. Mark one complete; check counts and Completed/Active filters.
4. Search for a word in a title, then a description; clear search.
5. Delete a task: cancel first, then confirm. Check counts.
6. Set a name, enable dark mode and save. Visit every screen.
7. Reload web / fully close and reopen mobile. Verify tasks and preferences persist.
8. On web, resize to phone and desktop widths; use Tab and Enter to navigate forms and controls.
9. Capture real screenshots as listed in `screenshots/README.md`.

See TESTING.md for actual verification status. A narrow browser screenshot is not evidence of native mobile testing.

## Submission
- REFLECTION.md contains a 300-word draft based on the observed workflow. Review it for accuracy and personalize it before submitting.
- Complete Exercise1.5/REFLECTION.md and the troubleshooting log.
- Add real screenshots. Do not submit placeholder files as evidence.
- Create a public GitHub repository; upload this package's files (excluding node_modules, .expo, dist and .git), and invite `csilvestro` in repository Settings → Collaborators.
- Use real development commits as you test and revise; do not invent earlier work or backdate commits.
- Verify the GitHub default branch and ZIP contain identical final source.
- ZIP the package folder excluding node_modules, .expo, dist, .git and logs. Both ZIP and public GitHub link are required.
