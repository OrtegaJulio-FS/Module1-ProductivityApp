# Reflection — Productivity App

The most challenging part of this project was getting the application running across both the browser and my iPhone. The browser version was available first, but opening that same page in Safari did not test the native application. I needed Expo Go to verify the mobile experience. The project initially used the SDK version provided in the exercise, but my installed Expo Go required SDK 58. Updating the project and signing into the same Expo account on the computer and phone were necessary steps before mobile testing could continue.

Another challenge was understanding how local storage differs between platforms. The application uses SQLite for native tasks and SecureStore for native preferences, while the browser uses AsyncStorage. This helped me understand why an interface looking correct in a browser does not automatically mean its native storage features work. Each platform needs its own verification.

To handle the time constraint, I focused on the required features before considering additional ideas. The application includes task creation, priority levels, completion controls, deletion confirmation, search, filters, statistics, and settings. Dark mode was the enhanced feature because it fit naturally with the theme preference requirement. Keeping the scope focused made the project easier to test and prepare for submission.

With more time, I would improve accessibility, add task editing and due dates, and expand automated testing. I would also refine navigation contrast and test more screen sizes. The mobile screenshots revealed that navigation text needed better contrast in dark mode, showing how valuable device testing can be.

What surprised me most was how much setup compatibility affected progress. Even with a working web version, mobile required additional configuration. Overall, this project strengthened my understanding of Expo, persistent storage, and systematic troubleshooting. It also showed me the importance of documenting issues and checking behavior on actual devices.
