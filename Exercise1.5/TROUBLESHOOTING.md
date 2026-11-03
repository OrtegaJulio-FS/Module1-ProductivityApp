# Troubleshooting log

## Observed during preparation
1. Issue: The Mac has Xcode Command Line Tools, but `simctl` is unavailable.
   Solution: Use a physical device with a compatible Expo Go/development build, or install full Xcode. Native testing remains pending.
2. Issue: The first dependency registry request failed with ENOTFOUND in the restricted environment.
   Solution: Retry the dependency installation with approved network access; see TESTING.md for the result.
3. Configuration correction: NativeWind v4 uses `jsxImportSource: 'nativewind'` in the Babel Expo preset, in addition to `nativewind/babel`.

## Complete after your test session
Setup Time: [actual minutes]
Most Challenging Part: [your experience]
Additional issues and verified solutions: [add as encountered]
