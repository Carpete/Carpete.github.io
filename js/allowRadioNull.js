let lastSelectedRadio = null;

function radioNull(currentRadio) {
    if (lastSelectedRadio === currentRadio) {
        currentRadio.checked = false;
        lastSelectedRadio = null;
        document.getElementById('Target1').style.display = 'none';
        document.getElementById('Target2').style.display = 'none';
    } else {
        lastSelectedRadio = currentRadio;
    }
}
    
