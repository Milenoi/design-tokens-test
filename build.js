const StyleDictionary = require('style-dictionary');

// Custom Transform für boxShadow
StyleDictionary.registerTransform({
    name: 'custom/shadow/css',
    type: 'value',
    matcher: (token) => token.type === 'boxShadow',
    transformer: (token) => {
        const { x, y, blur, spread, color } = token.value;
        return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    }
});

// Transform-Gruppe registrieren
StyleDictionary.registerTransformGroup({
    name: 'custom/css',
    transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'custom/shadow/css',
        'color/css',
        'size/px'
    ]
});

// Style Dictionary ausführen
const SD = StyleDictionary.extend('config.json');
SD.buildAllPlatforms();
