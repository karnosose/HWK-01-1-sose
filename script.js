function filterRange(arr, a, b){

	return arr.filter(item => (item > a  && item <b ));
}

let arr = [5, 8, 10 ,1, 22, 36, 1, 48, 100, 86, 28, 36];

alert(filterRange(arr, 15, 90));