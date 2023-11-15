function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {

            x[i].style.display="list-item";                 
        }
    }
}

$('table').hide();
$('#myInput').on("keyup", function(){
    var searchVal = $('#myInput').val();
    if(searchVal == ""){
        $('table').hide();
    }
    else{
        $('table').show();
        $('table tr td').show();
        $('table tr td:not(:contains("' + searchVal + '"))').hide();
    }
});