const { rgbToHex, getMaxColor, getMinColor, getRandomColor, createRectangle } = require('./main');

describe('rgbToHex', () => {
    test('Gets hex color value', () => {
        expect(rgbToHex(0, 0, 0)).toEqual('#000000');
        
        expect(rgbToHex(20, 30, 40)).toEqual('#141e28');
        expect(rgbToHex(56, 87, 73)).toEqual('#385749');
        expect(rgbToHex(151, 132, 144)).toEqual('#978490');
        expect(rgbToHex(190, 189, 188)).toEqual('#bebdbc');
        
        expect(rgbToHex(255, 255, 255)).toEqual('#ffffff');
    })
});

describe('getMaxColor', () => {
    test('Gets max color minor than 256', () => {
        expect(getMaxColor(30)).toEqual(60);
        expect(getMaxColor(100)).toEqual(130);
        expect(getMaxColor(180)).toEqual(210);
        expect(getMaxColor(230)).toEqual(255);
        expect(getMaxColor(240)).toEqual(255);
        expect(getMaxColor(250)).toEqual(255);
    });
});

describe('getMinColor', () => {
    test('Gets min color greater or equal than 0', () => {
        expect(getMinColor(5)).toEqual(0);
        expect(getMinColor(15)).toEqual(0);
        expect(getMinColor(25)).toEqual(0);
        expect(getMinColor(50)).toEqual(20);
        expect(getMinColor(100)).toEqual(70);
        expect(getMinColor(180)).toEqual(150);
    });
});

describe('getRandomColor', () => {
    test('Gets random color greater than min and less than max', () => {
        expect(getRandomColor(100, 20) >= 20).toBeTruthy()
        expect(getRandomColor(100, 20) >= 20).toBeTruthy()
        expect(getRandomColor(100, 50) >= 50).toBeTruthy()
        expect(getRandomColor(100, 50) <= 100).toBeTruthy()
        expect(getRandomColor(100, 80) <= 100).toBeTruthy()
        expect(getRandomColor(100, 80) <= 100).toBeTruthy()
    });
});

describe('createRectangle', () => {
    test('Creates a styled div', () => {
        expect(createRectangle('#978490', 5, 5).style).toHaveProperty('position', 'absolute');
        expect(createRectangle('#978490', 5, 5).style).toHaveProperty('left', '5%');
        expect(createRectangle('#978490', 5, 5).style).toHaveProperty('top', '5%');
        expect(createRectangle('#978490', 5, 5).style).toHaveProperty('width', '2.5%');
        expect(createRectangle('#978490', 5, 5).style).toHaveProperty('height', '2.5vh');
        expect(createRectangle('#978490', 5, 5).style).toHaveProperty('backgroundColor', 'rgb(151, 132, 144)');
        expect(createRectangle('#978490', 5, 5).classList.contains("animated")).toBeTruthy();
    });
});