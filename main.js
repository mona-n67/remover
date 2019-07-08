
var list = ['HTML', 5, 10, true, 'HTML', 10, 1, 'HTML'];
var output = document.getElementById('output');

remover = list.filter(function(a, b, c) {
    return c.indexOf(a) == b;
})

console.log(list);
console.log(remover);

output.innerHTML += "Before :  var list = ['HTML', 5, 10, true, 'HTML', 10, 1, 'HTML'] " + '<br>';
output.innerHTML +="After   :  var list =  "  +  " [ " + remover  +  " ] "  + '<br>';

//end