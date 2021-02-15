/* $('button').click(function(e){
     e.preventDefault(); 
    $.get("http://api.icndb.com/jokes/random", function(data){
        console.log(data);
        $('#joke').html(`${data.value.joke}`);
    });
}); */

$('button').click(fetchJoke);

function fetchJoke(){
    fetch("http://api.icndb.com/jokes/random")
    .then((res) => res.json())
    .then((data) => {
        $('#joke').html(`${data.value.joke}`);   
    })

}
