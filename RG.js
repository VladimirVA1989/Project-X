
// This is a JavaScript class. You don't need to know how it works yet.

function RakoGrid() {

    this.__proto__.createGridSkeleton = function(rowNumber, colNumber) {
        var skeleton = []; // Skeleton is an empty array now. Fill it to be the grid skeleton!

        // Write function here. Just a function which receive two NUMBERS and returns an ARRAY of ARRAY of OBJECTs.

        // Example: now rowNumber == 2 and colNumber == 2
        // skeleton (result of your task) should be equals to:
        // [[{row: 0, col: 0}, {row: 0, col: 1}], [{row: 1, col: 0}, {row: 1, col: 1}]]
        // but you should be able to change numbers and result must be right anyway!

        // you can try it by uncommenting this test line below and then open or refresh "table.html" in your browser:
        // skeleton = [[{row: 0, col: 0}, {row: 0, col: 1}], [{row: 1, col: 0}, {row: 1, col: 1}]];
        // you'll see a green Windows logo =)))

        // if your code is ok or you'll uncomment the test line,
        // you'll see the grid inside table.html document opened in your browser

        // TIP: you should be able to do: "console.log( skeleton[0][0] )" and this will print out "{row: 0, col: 1}"
        // USE CYCLES AND FILL SKELETON THROUGH 'EM!))

        // feel free to debug this function by using console of your browser
        // you'll see all the errors with line numbers in this RG.js file
        return skeleton;
    };

    this.__proto__.buildGrid = function(skeleton, element) {

        // this function's done
        // it draws a grid, based on the skeleton you've created by da function above =)
        // watch out! I use YOUR "skeleton" here to create an HTML,
        // except you've just uncommented the test line.

        for (var row = 0; row < skeleton.length; row++) {
            var rowDiv = document.createElement('div');
            rowDiv.className = 'rg-row';
            element.appendChild(rowDiv);
            for (var cell = 0; cell < skeleton.length; cell++){
                var cellDiv = document.createElement('div');
                cellDiv.className = 'rg-cell';
                cellDiv.setAttribute('row', skeleton[row][cell].row);
                cellDiv.setAttribute('cell', skeleton[row][cell].col);
                rowDiv.appendChild(cellDiv);
            }
        }
    };

}; 
