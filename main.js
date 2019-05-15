window.onscroll = function showHeader() {
    var header = document.querySelector('.sidebar');
    if(window.pageYOffset > 408){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}

var modal = document.getElementById('myModal');
var img = document.img;
var modalImg = document.getElementById('img01');



