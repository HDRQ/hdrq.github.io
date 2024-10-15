var a = 0;
var b = 0;
const timer = document.getElementById("time");

function time(){
    a = a + 1;
    console.log(`time: ${a}`)
    setTimeout(() => {}, 1000);
    if (a > 59){
        a = a - 60;
        b = b + 1;
    }
    timer.innerHTML(`time: ${b}:${a}`);
}
time();
while (true) {
    time();
}