# Actual verification status

## Passed during preparation
- npm dependency installation completed.
- TypeScript: `npm run typecheck` passed.
- Expo SDK package compatibility: `expo install --check` passed using installed/offline SDK metadata; remote validation was unavailable.
- Production web export completed.
- Browser: created a High-priority task with description, marked it complete, reloaded and confirmed task persistence and statistics.
- Browser: saved name and dark mode, confirmed themed navigation.
- Browser: nonmatching search hides tasks; Completed filter displays the completed task.
- Browser: delete opens confirmation; Cancel preserves the task. Confirmed deletion still needs manual testing.
- Exercise storage tests: AsyncStorage and localStorage fallback passed; SQLite correctly reports N/A on web.
- NativeWind: colors, spacing, shapes, borders and typography visually inspected on web.
- Real web screenshots included as JPEG files.

## Still required
- Actual native mobile runtime testing and screenshots. Command-line tools alone do not run a mobile app.
- Full test checklist in README, including keyboard navigation, responsive widths, deletion confirmation and native persistence.
- Student's personal reflections and actual setup time.
- Public GitHub repository, instructor invitation, and final matching ZIP after adding remaining materials.

## Known constraints
- Upgraded from SDK 54 to SDK 58 to match the user’s installed iPhone Expo Go. TypeScript, SDK compatibility checks (offline metadata), iOS bundling and web bundling pass after upgrade. Actual iPhone runtime verification remains pending.
- Browser task/settings storage follows Exercise 1.5's AsyncStorage proxy. Literal cross-platform SQLite would need a different web setup.
- npm reports 12 moderate dependency advisories after the SDK 58 upgrade. No force upgrade was applied because it can break SDK compatibility.
- No cloud sync or task editing; neither is required by the core rubric.
- Local preview uses a basic static server; direct reloads at nested URLs require an SPA fallback. Use `npm run web` for development.
