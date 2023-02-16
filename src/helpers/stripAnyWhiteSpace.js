export const stripAnyWhiteSpace = (str) => {
    if (str !== null && str !== undefined && typeof str === "string") {
        return str.replace(/\s+/g, "");
    }
    return str
}