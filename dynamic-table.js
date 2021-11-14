function addRow(tableId = '', values = []) {
	const table = document.getElementById(tableId);
	const keys = Object.keys(values);
	const lenght = keys.length;

	let row = table.insertRow();
	let cell;

	for (let i = 0; i < lenght; i++) {
		cell = row.insertCell();
		cell.innerHTML = values[keys[i]];
	}
}
