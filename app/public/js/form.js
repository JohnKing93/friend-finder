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

        $("#name").val("");
        $("#photo").val("");
        $("#question-one").val(3);
        $("#question-two").val(3);
        $("#question-three").val(3);
        $("#question-four").val(3);
        $("#question-five").val(3);
        $("#question-six").val(3);
        $("#question-seven").val(3);
        $("#question-eight").val(3);
        $("#question-nine").val(3);
        $("#question-ten").val(3);
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
});