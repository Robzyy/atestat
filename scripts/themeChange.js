var themes = [{
        name: "Sakura (default)",
        href: "./style/common/sakura/sakura.css",
        backgroundColor: "#f9f9f9",
        secondaryBackgroundColor: "f1f1f1",
        accentColor: "#1d7484"
    },
    {
        name: "Sakura-dark-solarized",
        href: "./style/common/sakura/sakura-dark-solarized.css",
        backgroundColor: "#002b36",
        secondaryBackgroundColor: "#073642",
        accentColor: "#2aa198",
    },
    {
        name: "Sakura-dark",
        href: "./style/common/sakura/sakura-dark.css",
        backgroundColor: "#222222",
        secondaryBackgroundColor: "#4a4a4a",
        accentColor: "#ffffff"
    },
    {
        name: "sakura-earthly",
        href: "./style/common/sakura/sakura-earthly.css",
        backgroundColor: "#ffffff",
        secondaryBackgroundColor: "#f7f7f7",
        accentColor: "#007559"
    },
    {
        name: "sakura-ink",
        href: "./style/common/sakura/sakura-ink.css",
        backgroundColor: "#ffffff",
        secondaryBackgroundColor: "#f7f7f7",
        accentColor: "#3b22ea"
    },
    {
        name: "sakura-pink",
        href: "./style/common/sakura/sakura-pink.css",
        backgroundColor: "#ffe4f5",
        secondaryBackgroundColor: "#f8d2e9",
        accentColor: "#980255"
    },
    {
        name: "sakura-vader",
        href: "./style/common/sakura/sakura-vader.css",
        backgroundColor: "#120c0e",
        secondaryBackgroundColor: "#40363a",
        accentColor: "#eb99a1"
    }
];

var defaultValue = 3;

var current = document.cookie || defaultValue;
var sakura = document.getElementById("sakura-css");
var css = document.querySelector(":root");

function getVars() {
    var colors = {
        back: css.getPropertyValue("--background-color"),
        prim: css.getPropertyValue("--accent-color")
    }
    return colors;
}

// var switchTag = document.getElementById("switch");
// var currentThemeTag = document.getElementById("currentTheme");

function switchSakuraTheme() {
    current = (current + 1) % themes.length;

    // Change overall theme
    sakura.href = themes[current].href;

    // Change my variables in ../style/common/common.css
    css.style.setProperty("--background-color", themes[current].backgroundColor);
    css.style.setProperty("--accent-color", themes[current].accentColor);
    css.style.setProperty("--secondary-background-color", themes[current].secondaryBackgroundColor);


    // currentThemeTag.innerHTML = themes[(current + 1) % themes.length].name;
    return themes[current].name;
}