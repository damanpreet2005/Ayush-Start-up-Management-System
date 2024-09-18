function showForm(formId) {
    // Hide all forms
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.style.display = 'none');

    // Show the selected form
    const selectedForm = document.getElementById(formId);
    if (selectedForm) {
        selectedForm.style.display = 'block';
    }
}

