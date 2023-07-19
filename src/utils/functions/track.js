export const track = (...args) => {
    try {
        window.fbq(...args);
    } catch (err) {
        console.log("Pixel Error.");
    }
};
