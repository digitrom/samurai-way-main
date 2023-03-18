export {};

declare global {
    interface Window {
        state: typeof object;
    }
}