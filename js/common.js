// Function to set accessibility settings in local storage
function setAccessibilitySettings(colorblind, fontSize, vibrant) {
    localStorage.setItem('colorblindMode', colorblind);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('vibrantMode', vibrant);
}

// Function to get accessibility settings from local storage
function getAccessibilitySettings() {
    const colorblind = localStorage.getItem('colorblindMode');
    const fontSize = localStorage.getItem('fontSize');
    const vibrant = localStorage.getItem('vibrantMode');

    return {
        colorblind: colorblind === 'true',
        fontSize: fontSize ? parseFloat(fontSize) : null,
        vibrant: vibrant === 'true'
    };
}

// Function to apply accessibility settings
function applyAccessibilitySettings() {
    const settings = getAccessibilitySettings();

    // Apply colorblind mode
    if (settings.colorblind) {
        document.body.classList.add('colorblind-mode');
    } else {
        document.body.classList.remove('colorblind-mode');
    }

    // Apply font size
    const fontSize = settings.fontSize;
    if (fontSize) {
        const elements = document.querySelectorAll('.changeable');
        elements.forEach(el => {
            const style = window.getComputedStyle(el);
            const currentFontSize = parseFloat(style.fontSize);
            if (currentFontSize) {
                const newFontSize = currentFontSize + fontSize;
                el.style.fontSize = `${newFontSize}px`;
            }
        });
    }

    // Apply vibrant mode
    if (settings.vibrant) {
        document.body.classList.add('vibrant-mode');
    } else {
        document.body.classList.remove('vibrant-mode');
    }
}

// Apply accessibility settings when the page loads
window.addEventListener('load', applyAccessibilitySettings);

document.getElementById('mainButton-2').addEventListener('click', () => {
    document.getElementById('toggleContainer-2').classList.toggle('show');
});

document.getElementById('colorblindMode').addEventListener('click', () => {
    const colorblindMode = document.body.classList.toggle('colorblind-mode');
    setAccessibilitySettings(colorblindMode, null, null);
    closeDropdown();
});

document.getElementById('increaseFont').addEventListener('click', () => {
    const fontSizeIncrement = 5;
    adjustFontSize(fontSizeIncrement);
    setAccessibilitySettings(null, fontSizeIncrement, null);
    closeDropdown();
});

document.getElementById('vibrantMode').addEventListener('click', () => {
    const vibrantMode = document.body.classList.toggle('vibrant-mode');
    setAccessibilitySettings(null, null, vibrantMode);
    closeDropdown();
});

document.getElementById('reset').addEventListener('click', () => {
    resetAdjustments();
    localStorage.clear(); // Clear stored accessibility settings
    closeDropdown();
});

function adjustFontSize(increment) {
    const elements = document.querySelectorAll('.changeable');
    elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const fontSize = parseFloat(style.fontSize);
        if (fontSize) {
            el.style.fontSize = `${fontSize + increment}px`;
        }
    });
}

function resetAdjustments() {
    document.body.classList.remove('colorblind-mode', 'vibrant-mode');
    const elements = document.querySelectorAll('.changeable');
    elements.forEach(el => {
        if (el.style.fontSize) {
            el.style.fontSize = '';
        }
    });
}

function closeDropdown() {
    document.getElementById('toggleContainer-2').classList.remove('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.toggleButton-2')) {
        const dropdowns = document.getElementsByClassName('dropdown-content-2');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
