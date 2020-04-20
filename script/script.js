var nama = prompt("Masukan Nama Anda");
first(nama);

function first(nama) {
	var test = false;
	while (test == false) {
		var hurufdepan = nama.charCodeAt(0);
		var cek = prompt("Apa ACSII huruf depan kamu");
		if (cek == hurufdepan) {
			alert("benar");
			test = true;
		} else {
			alert("salah");
			test = false;
		}
	}
}
const like = "Like";

function votelike() {
	let number = localStorage.getItem(like);
	number++;
	localStorage.setItem(like, number);
	document.getElementById('like').innerHTML = localStorage.getItem(like) + " like";
	alert("Terima kasih " + nama + " terus belajar yah :)");
}
const dislike = "dislike";

function votedislike() {
	let number = localStorage.getItem(dislike);
	number++;
	localStorage.setItem(dislike, number);
	document.getElementById('dislike').innerHTML = localStorage.getItem(dislike) + " dislike";
	alert("Dislike " + nama + " membantu untuk pengembangan web ini :)");
}