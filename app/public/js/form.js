$(document).ready(function() {

    // Handle form validaton
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            }
            else {
                event.preventDefault();
                handleSubmit(event);
            }
        }, false);
    });

    // Handle submission
    function handleSubmit(event) {

        // Store form submission
        var userResponse = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                $("#question-one").val(),
                $("#question-two").val(),
                $("#question-three").val(),
                $("#question-four").val(),
                $("#question-five").val(),
                $("#question-six").val(),
                $("#question-seven").val(),
                $("#question-eight").val(),
                $("#question-nine").val(),
                $("#question-ten").val(),
            ]
        };

        // Request match
        $.post("/api/friends", userResponse, function (data) {
            $("#match-name").text(data.name);
            $("#match-photo").attr("src", data.photo);
            $("#response").modal("toggle");
        });
    }
});