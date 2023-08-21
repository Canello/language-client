export const track = (...args: Array<string>) => {
    try {
        if (window.fbq) window.fbq(...args);
    } catch (err) {
        console.log("Pixel Error.");
    }
};
