// Set default color input
let pickedColor="#000";
// Set table element to a variable
let myTable = document.getElementById('pixelCanvas');

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

// Table cells is clicked
myTable.addEventListener("click", function(evt) {
  evt.target.bgColor = pickedColor;
})

// When size is submitted by the user, call makeGrid()
function makeGrid() {

  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;

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
