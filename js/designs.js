// Set default color input
var pickedColor="#000";

// Submit button event listener
button.addEventListener('click', function(evt) {
    makeGrid();
    evt.preventDefault();
});

// Change the colorPicker
colorPicker.addEventListener("change", function(evt) {
  pickedColor = evt.target.value;
  console.log(pickedColor);
})

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  let myTable = document.getElementById('pixelCanvas');

  //delete existing rows in table
  for (let i = myTable.rows.length - 1; i >= 0; i--) {
    myTable.deleteRow(i);
  }

  // Create table
  for (let r = 0; r < height; r++) {
    let row = '<tr id=row' + r + '></tr>';
    myTable.insertAdjacentHTML('beforeend', row);
    for (let c = 0; c < width; c++) {
      let cell = '<td id=cell' + c + '></td>';
      document.getElementById('row' + r).insertAdjacentHTML('beforeend', cell);
    }
  }
}
