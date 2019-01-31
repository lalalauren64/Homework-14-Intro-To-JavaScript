// from data.js
var tableData = data;

// YOUR CODE HERE!
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("datetime");
var $searchButton = document.querySelector("filter-btn");

// //setup search button and table data to be filtered
// $searchButton.addEventListener("click", handleSearchButtonClick);

var filteredrows = data;

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredrows.length; i++){
        var rows = filteredrows[i];
        var fields = [
            'datetime',
            'city',
            'state',
            'country',
            'shape',
            'durationMinutes',
            'comments'
        ];
        var $row = $tbody.insertRow();
        for (var i2 = 0; i2 < fields.length; i2++){
            var field = fields[i2];
            var $cell = $row.insertCell(i2);
            $cell.innerText = rows[field];
        }
    }
}


function handleSearchButtonClick(){
    var filterdata = $dateInput.Value.trim().toLocaleLowerCase();

    filteredrows = data.filter(function(rows){
        var datetimeRowData = rows.datetime;
        var cityRowData = rows.city.toLocaleLowerCase();
        var stateRowData = rows.state.toLocaleLowerCase();
        var countryRowData = rows.country.toLocaleLowerCase();
        var shapeRowData = rows.shape.toLocaleLowerCase();

        return (datetimeRowData === filterdata || cityRowData === filterdata || stateRowData === filterdata || countryRowData === filterdata || shapeRowData === filterdata);
    });      
    renderTable();  
}

renderTable();