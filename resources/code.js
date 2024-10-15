var a = 0;
var b = 0;

function time(){
    a = a + 1;
    setTimeout(() => {}, 1000);
    if (a > 59){
        a = a - 60;
        b = b + 1;
    }
    document.getElementById("time").innerHTML(`time: ${b}:${a}`);
}

while (true) {
    time();
}