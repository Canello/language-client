export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = ensureTwoDigits(date.getDate());
    const month = ensureTwoDigits(date.getMonth() + 1);
    const year = String(date.getFullYear());

    return day + "/" + month + "/" + year;
};

export const ensureTwoDigits = (num) =>
    String(num).length === 1 ? "0" + num : String(num);
