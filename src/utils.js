export const getImageUrl = (path) => {
    return new URL(`assect/${path}`, import.meta.url).href;
};