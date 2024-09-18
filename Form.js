function openTab(evt, tabName) {
    var i, tabcontent, tabbtn;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all buttons
    tabbtn = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabbtn.length; i++) {
        tabbtn[i].classList.remove("active");
    }

    // Show the current tab and add active class to the button
    document.getElementById(tabName).style.display = "block";
    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}

// Automatically open "Student" tab on page load
window.onload = function() {
    // Simulate a click on the "Student" tab button
    document.getElementsByClassName("tab-btn")[0].click();
};
var dobInput = document.getElementById('dob');
  dobInput.addEventListener('change', function() {
    if (dobInput.value) {
      dobInput.classList.remove('placeholder');
    } else {
      dobInput.classList.add('placeholder');
    }
  });
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        fetch('http://localhost:3000/submitForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});