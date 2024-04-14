let number = 0;

document.getElementById("displayNumber").innerHTML = "0";

function decrease () {
    number--;
    document.getElementById("displayNumber").innerHTML = number;
}

function increase () {
    number++;
    document.getElementById("displayNumber").innerHTML = number;
};

function reset () {
    number = 0;
    document.getElementById("displayNumber").innerHTML = number;
};