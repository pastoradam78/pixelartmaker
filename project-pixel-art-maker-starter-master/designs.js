/*To Do:  -Access Inputs and Form Elements- assigned to variables.
 *        -Add Event listeners
 *        -Build grid with a loop
 *        -Add click listeners for each of the cells to be painted.
 */

// 1. Select elements and assign to variables
const color = document.getElementById('colorPicker')
const hgt = document.getElementById('inputHeight')
const wth = document.getElementById('inputWidth')
const button = document.getElementById('submitButton')
const canvas = document.getElementById('pixelCanvas')

/* When size is submitted by the user, call makeGrid()
 * 2. Add event listener
 */
button.addEventListener('click', function() {
    canvas.innerHTML = '';
    event.preventDefault();
    const height = hgt.value;
    const width = wth.value;
    makeGrid(height, width);
})

//3. Build a grid with a for loop, including listeners cell colors.
function makeGrid(height, width) {
    for (var i = 0; i < height; i++) {
        let row = canvas.insertRow(i);
        for (var j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', function(e) {
                e.target.style.backgroundColor = color.value;
            })
        }
    }
}
