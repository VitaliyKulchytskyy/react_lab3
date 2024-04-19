/**
 * Convert a hex color to the dictionary of rgb values
 * @param {*} color the hex color to translet to
 * @returns a dictionay \{r, g, b\}
 */
function hexToRgbArray(color) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Translete the hex color interpritation to the hex string 
 * @param {*} color the hex color to translet to
 * @returns ffffff (without the hash symbol (#))
 */
function hexToHexString(color) {
    if (color.length <= 1)
        return "";

    return color.slice(1);
}

/**
 * Translete the hex color interpritation to the rgb interpritation
 * @param {*} color the hex color to translet to
 * @returns rgb(255, 255, 255)
 */
function hexToRgb(color) {
    const rgb = hexToRgbArray(color)
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
}

/**
 * Translete the hex color interpritation to the rgba interpritation
 * @param {*} color the hex color to translet to
 * @param {*} alpha alpha value
 * @returns rgba(255, 255, 255, 1.0)
 */
function hexToRgba(color, alpha = 1.0) {
    const rgb = hexToRgbArray(color)
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${parseFloat(alpha).toFixed(1)})`
}

export const colorType = {
    Hex: "hex",
    HexStr: "hexStr",
    Rgb: "rgb",
    Rgba: "rgba"
}

/**
 * 
 * @param {*} color the hex color to convert to 
 * @param {*} type type of color to convert to
 * @returns converted color depends on the type 
 */
export function hexToType(color, type) {
    switch (type) {
        case "hexStr":
            return hexToHexString(color);
        case "rgb":
            return hexToRgb(color);
        case "rgba":
            return hexToRgba(color)
        default:
            return color;
    }
}

// module.exports = { hexToHexString, hexToRgb, hexToRgba, hexToRgbArray, hexToType, colorType };
