const colorUtils = require("../src/utils/colorUtils");


test("convert white color from hex to a rgb array", () => {
    const whitehex = "#ffffff";
    const whitergb = colorUtils.hexToRgbArray(whitehex);

    expect(whitergb.r).toBe(255);
    expect(whitergb.g).toBe(255);
    expect(whitergb.b).toBe(255);
});

test("convert white color from hex to hex string", () => {
    const whitehex = "#ffffff";
    const whitergb = colorUtils.hexToHexString(whitehex);

    expect(whitergb).toBe("ffffff");
});

test("convert white color from hex to rgb", () => {
    const whitehex = "#ffffff";
    const whitergb = colorUtils.hexToRgb(whitehex);

    expect(whitergb).toBe("rgb(255, 255, 255)");
});

test("convert white color from hex to rgba", () => {
    const whitehex = "#ffffff";
    const whitergb = colorUtils.hexToRgba(whitehex);

    expect(whitergb).toBe("rgba(255, 255, 255, 1.0)");
});



