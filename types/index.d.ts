// Type definitions for Apache Background Mode plugin
// Project: https://github.com/andeodev/cordova-plugin-background-mode
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The plugin prevent the app from going to sleep while in background
 */
interface CordovaPluginBackgroundMode {
  /**
   * The background mode can be enabled
   */
  enable(): void;
  /**
   * The background mode can be disabled
   */
  disable(): void;
  /**
   * enable() or disable()
   */
  setEnabled(enable: boolean): void;
  /**
   * Checks if the background mode is enabled or not
   */
  isEnabled(): boolean;
  /**
   * Checks if the background mode is activated or not
   */
  isActive(): boolean;
  /**
   * Customize default title, ticker and text for the notification
   */
  setDefaults(item: ICordovaPluginBackgroundModeNotificationItem): void;
  /**
   * Configure the default background notification
   */
  configure(item: ICordovaPluginBackgroundModeNotificationItem): void;
  /**
   * Add event listener.
   */
  on(event: EventType, callback: () => void): void;
  /**
   * Remove event listener.
   */
  un(event: EventType, callback: () => void): void;
  /**
   * Android specifics: move from foreground to background.
   */
  moveToBackground(): void;
  /**
   * Android specifics: move from background to foreground.
   */
  moveToForeground(): void;
  /**
   * Android specifics: Override the back button on Android to go to background instead of closing the app.
   */
  overrideBackButton(): void;
  /**
   * Android specifics: Exclude the app from the recent task list works on Android 5.0+.
   */
  excludeFromTaskList(): void;
  /**
   * Android specifics: The method works async instead of isActive() or isEnabled().
   */
  isScreenOff(callback: (enabled: boolean) => void): void;
  /**
   * Turn screen on.
   */
  wakeUp(): void;
  /**
   * Turn screen on and show app even locked.
   */
  unlock(): void;
}

type EventType = 'enable'|'disable'|'activate'|'deactivate'|'failure';

interface ICordovaPluginBackgroundModeNotificationItem {

  /**
   * The title of the notification displayed in background mode
   */
  title?: string | undefined,
  /**
   * The ticker of the notification displayed in background mode
   */
  ticker?: string | undefined,
  /**
   * The body of the notification displayed in background mode
   */
  text?: string | undefined,
  /**
   * Handles if app is coming to foreground when tapping on the notification
   */
  resume?: boolean | undefined,
  /**
   * Handles if there is a notification when background is activated
   */
  silent?: boolean | undefined
}

interface CordovaPlugins {

  backgroundMode: CordovaPluginBackgroundMode
}
