function toggleForm() {
    const formType = document.getElementById('formType').value;
    const fieldsForElder = document.getElementById('fieldsForElder');

    if (formType === 'paraFamiliar') {
        fieldsForElder.style.display = 'flex';
    } else {
        fieldsForElder.style.display = 'none';
    }
}