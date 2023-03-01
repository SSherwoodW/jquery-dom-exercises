let moviesList = [];

let currentId = 0;

$(function(){

    $('#new-movie-form').on('submit', function(evt){
        evt.preventDefault();
        let title = $('#movie-title').val();
        let rating = $("#movie-rating").val();

        let movieInfo = {title, rating, currentId};
        const HTMLtoAppend = createMovieDataHTML(movieInfo);

        currentId++
        moviesList.push(movieInfo);

        $('#table-body').append(HTMLtoAppend);
        $('#new-movie-form').trigger('reset');
    });

    $('tbody').on('click', '.btn.btn-danger', function(evt){
        let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId ===+$(evt.target).data('deleteId'))

        moviesList.splice(indexToRemoveAt, 1);

        $(evt.target)
            .closest('tr')
            .remove();
    })




})

function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.currentId}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }