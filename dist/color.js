"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complementaryHsl = exports.hslaToString = exports.rgbaToString = exports.hslToHex = exports.hexToHsl = exports.hslToRgb = exports.rgbToHsl = exports.hexToRgb = exports.rgbToHex = void 0;
// Converts an RGB color to Hex.
function rgbToHex({ r, g, b }) {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join('');
}
exports.rgbToHex = rgbToHex;
// Converts a Hex color to RGB.
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
exports.hexToRgb = hexToRgb;
// Converts an RGB color to HSL.
function rgbToHsl({ r, g, b }) {
    r /= 255, g /= 255, b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) {
        h = s = 0; // achromatic
    }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        if (h !== undefined) {
            h /= 6;
        }
    }
    return { h: Math.round(h ? h * 360 : 0), s: Math.round(s * 100), l: Math.round(l * 100) };
}
exports.rgbToHsl = rgbToHsl;
// Define the hue2rgb helper function directly within the module
function hue2rgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
// Then your hslToRgb function
function hslToRgb({ h, s, l }) {
    let r, g, b;
    h /= 360;
    s /= 100;
    l /= 100;
    if (s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
exports.hslToRgb = hslToRgb;
// Converts a Hex color to HSL.
function hexToHsl(hex) {
    const rgb = hexToRgb(hex);
    if (rgb) {
        return rgbToHsl(rgb);
    }
    return { h: 0, s: 0, l: 0 }; // Fallback for null RGB
}
exports.hexToHsl = hexToHsl;
// Converts an HSL color to Hex.
function hslToHex({ h, s, l }) {
    const rgb = hslToRgb({ h, s, l });
    return rgbToHex(rgb);
}
exports.hslToHex = hslToHex;
// Formats an RGBA color as a CSS string.
function rgbaToString({ r, g, b, a = 1 }) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
exports.rgbaToString = rgbaToString;
// Formats an HSLA color as a CSS string.
function hslaToString({ h, s, l, a = 1 }) {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}
exports.hslaToString = hslaToString;
// Calculates the complementary color for an HSL color.
function complementaryHsl({ h, s, l }) {
    return { h: (h + 180) % 360, s, l };
}
exports.complementaryHsl = complementaryHsl;
