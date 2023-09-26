$(function() {

    $('#movieSubmit').on('click', function(e) {
        e.preventDefault();
        let $movieTitle = $("#movieTitle").val();
        let $rating = $("#rating").val();
    
        if ($movieTitle.length <= 2) {
            return;
        }

        let movies = {$movieTitle , $rating}
        const movieAppend = toAppend(movies);

        $('#movies').append(movieAppend);

        $('div').on("click", "button", function(e) {
            $(e.target).closest("div").remove();
        })
        
    
    });

});



function toAppend(info){
    return `
    <div>
    <h2>${info.$movieTitle} - ${info.$rating}</h2>
    <button>X</button>
    </div>
    `
}

