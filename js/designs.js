// Set table element to a variable
let myTable = document.getElementById('pixelCanvas');

// Submit button event listener
button.addEventListener('click', function(evt) {
    makeGrid();
    evt.preventDefault();
});

// Table cells is clicked
myTable.addEventListener("click", function(evt) {
  evt.target.bgColor = colorPicker.value;
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {

  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;

  //delete existing rows in table
  for (let i = myTable.rows.length - 1; i >= 0; i--) {
    myTable.removeChild(myTable.getElementsByTagName('tr')[i]);
  }

  // Create table
  for (let r = 0; r < height; r++) {
    let newRow = document.createElement('tr');
    myTable.appendChild(newRow);
    document.getElementsByTagName("tr")[r].setAttribute("id", "row" + r);
    for (let c = 0; c < width; c++) {
      let newColumn = document.createElement('td');
      document.getElementById('row' + r).appendChild(newColumn);
    }
  }
}
