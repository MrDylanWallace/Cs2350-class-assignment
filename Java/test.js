var result = ' x   ';

function buff(val) {
    var buff = '';
    var pad = 4 - val;
    while (pad-- > 0)
        buff += ' ';
    return buff;
}

for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if (i == 0 && j > 0) {
            result += '[' + j + ']' + buff((j + '').length + 2);
        }
        else if (j == 0 && i > 0) {
            result += '[' + i + ']';
        }
        else if (i > 0 && j > 0) {
            result += buff((i * j + '').length) + i * j;
        }
    }
    result += '\n'
}

function generateTable() {
	var input = document.getElementById('input').value;

	if (input == "") {
		alert("Enter some number first");
	} else {
		var digit = 0;
		if (input <= 0) {
			digit = 1;
			document.getElementById('input').value = 1;
		} else {
			digit = input;
		}



		var html = "";
		for (var i = 1; i <= digit; i++) {
			html += "<tr>";
			for (var j = 1; j <= 12; j++) {

				html += "<td style='border: 1px solid goldenrod; padding: 10px'>" + i * j + "</td>";
			}
			html += "</tr>";
		}

		document.getElementById('result').innerHTML = html;
		document.getElementById('result').setAttribute('class', 'alert-warning');
	}
}