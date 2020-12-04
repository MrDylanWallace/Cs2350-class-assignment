function generateTable() {
	var input = 12;

	if (input == "") {
		alert("number not working");
	} else {
		var digit = 0;
		if (input <= 0) {
			digit = 1;
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