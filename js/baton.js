var count = 0;
document.getElementById("button").onclick = function () {
    count++;
    if (count % 2 == 0) { //проверка на четность
		document.getElementById("text").style.color="red";
        document.getElementById("button").textContent="Ой...";
	} else {
        document.getElementById("text").style.color="black";
        document.getElementById("button").textContent="Фокус";
	}
}