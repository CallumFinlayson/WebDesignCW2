var index = 1;
displayDiv(index);

function iterateDiv(n) {
    displayDiv(index += n);
}

function displayDiv(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {
    	index = 1
    } 
    if (n < 1) {
    	index = x.length
    } 
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[index-1].style.display = "block"; 
}
function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    document.getElementById('qty').value = new_qty;
    return new_qty;
}