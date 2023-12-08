
var noRead = document.querySelectorAll(".div-reactions")
var redPoint = document.querySelectorAll(".read-point")
var notNumber = document.getElementById('notification-number')

function clenAll(){

    for(i = 0;i < noRead.length;i++){
        noRead[i].style.backgroundColor = '#ffff';
        redPoint[i].style.display = 'none'
        notNumber.innerHTML = '0'
    }
}