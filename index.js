let count1El = document.getElementById("count1-el")
let count2El = document.getElementById("count2-el")

let countHome = 0
let countGuest = 0

function btnh1() {
    countHome += 1;
    count1El.textContent = countHome;
}

function btnh2() {
    countHome += 2;
    count1El.textContent = countHome;
}

function btnh3() {
    countHome += 3;
    count1El.textContent = countHome;
}

function btng1() {
    countGuest += 1;
    count2El.textContent = countGuest;
}

function btng2() {
    countGuest += 2;
    count2El.textContent = countGuest;
}

function btng3() {
    countGuest += 3;
    count2El.textContent = countGuest;
}

function reset(){
    countHome = 0
    countGuest = 0
    count1El.textContent = countHome;
    count2El.textContent = countGuest;
}