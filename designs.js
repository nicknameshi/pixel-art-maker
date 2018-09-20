$('form').submit(function(e) {
	e.preventDefault();
	makeGrid();
})


function makeGrid() {
	const height = $('#inputHeight').val();
	const width = $('#inputWidth').val();
	const table = $('#pixelCanvas');

	for (let i = 0; i < height; i++) {
		const tableRow = $('<tr></tr>');
		table.append(tableRow);
		for (let y = 0; y < width; y++) {
			const cell = $('<td></td>');
			tableRow.append(cell);
			cell.click(function() {
				cell.attr('bgcolor', $('#colorPicker').val());
			})
		}
	}
}