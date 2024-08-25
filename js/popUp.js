window.onload = function() {
    var modal = document.getElementById("myModal");
    var button = document.querySelector(".modal-content .button");
    document.getElementById('body-custom').classList.add('darken');
    document.body.classList.add('darken-body');

    modal.style.display = "block";

    button.onclick = function() {
        modal.style.display = "none";
        document.getElementById('body-custom').classList.remove('darken');
        document.body.classList.remove('darken-body')
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};