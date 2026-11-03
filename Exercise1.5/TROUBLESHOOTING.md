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

4. Issue: iPhone Expo Go rejected the project because it requires SDK 58, while the course setup used SDK 54.
   Solution: Upgraded Expo and its native dependencies to SDK 58 and updated NativeWind and build tools. Native runtime results remain pending phone verification.
