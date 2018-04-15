$(document).ready(function () {
    // event handler for deleting a note
    $(".delete-btn").click((event)=> {
        event.preventDefault();
        //delete route
    });

    // event handler for opening the note modal
    $(".note-btn").click((event) => {
        event.preventDefault();
        const noteID = $(this).attr("data");
        console.log(noteID);
        //post route
    });

    $("#save-note").click((event) => {
        event.preventDefault();
        const noteText = $('#"note-input').val().trim();
        $('#note-modal').modal('toggle');
    });

    $(".save-btn").click(function(event) {
        event.preventDefault();
        const button = $(this);
        const id = button.attr("id");
        $.ajax(`/save/${id}`, {
            type: "PUT"
        }).then(function() {
            const alert = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
            Your note has been saved!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>`
            button.parent().append(alert);
            }
        );
    });
});