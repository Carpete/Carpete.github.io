window.onload = function loadButton() {
    const urlParams = new URLSearchParams(window.location.search);
    const formType = urlParams.get('form');
    
    // Get the select element
    const selectElement = document.getElementById('formType');
    
    if (formType === '1') {
        // Set the select element to "Para Mim"
        selectElement.value = 'paraMim';
    } else if (formType === '2') {
        // Set the select element to "Para um Familiar"
        selectElement.value = 'paraFamiliar';
    }

    // Call the toggleForm function to show/hide the relevant fields
    toggleForm();
};