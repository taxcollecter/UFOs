// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
  var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    if (d3.select("#datetime").property("value")) {
      let elementDate = '#datetime';
      console.log("This datetime thing working");
    }

    if (d3.select("#city").property("value")) {
      let elementCity = '#city';
      console.log("This city thing working");
    }
    
    if (d3.select("#state").property("value")) {
      let elementState = '#state';
      console.log("This state thing working");
    }

    if (d3.select("#country").property("value")) {
      let elementCountry = '#country';
      console.log("This country thing working");
    }

    if (d3.select("#shape").property("value")) {
      let elementShape = '#shape';
      console.log("This shape thing working");
    }
    
    // 4b. Save the value that was changed as a variable.
    if (d3.select("#datetime").property("value")) {
      var valueDate = d3.select("#datetime").property("value");
      console.log("This datevalue thing working");
    }

    if (d3.select("#city").property("value")) {
      var valueCity = d3.select("#city").property("value");
      console.log("This cityvalue thing working");
    }

    if (d3.select("#state").property("value")) {
      var valueState = d3.select("#state").property("value");
      console.log("This statevalue thing working");
    }

    if (d3.select("#country").property("value")) {
      var valueCountry = d3.select("#country").property("value");
      console.log("This countryvalue thing working");
    }

    if (d3.select("#shape").property("value")) {
      var valueShape = d3.select("#shape").property("value");
      console.log("This shapevalue thing working");
    }

    // 4c. Save the id of the filter that was changed as a variable.
    if (d3.select("#datetime").property("value")) {
      var filterDate = '#datetime';
      console.log("This datetimefilter thing working")
    }

    if (d3.select("#city").property("value")) {
      var filterCity = '#city';
      console.log("This cityfilter thing working");
    }

    if (d3.select("#state").property("value")) {
      var filterState = d3.select("#state").property("value");
      console.log("This statefilter thing working");
    }

    if (d3.select("#country").property("value")) {
      var filterCountry = d3.select("#country").property("value");
      console.log("This countryfilter thing working");
    }

    if (d3.select("#shape").property("value")) {
      var filterShape = d3.select("#shape").property("value");
      console.log("This shapefilter thing working");
    }

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (d3.select("#datetime").property("value")) {
      filters['#datetime'] = valueDate;
    }

    else {
      delete filters['#datetime'];
    }

    if (d3.select("#city").property("value")) {
      filters['#city'] = valueCity;
    }

    else {
      delete filters['#city'];
    }

    if (d3.select("#state").property("value")) {
      filters['#state'] = valueState;
    }

    else {
      delete filters['#state'];
    }

    if (d3.select("#country").property("value")) {
      filters['#country'] = valueCountry;
    }

    else {
      delete filters['#country'];
    }

    if (d3.select("#shape").property("value")) {
      filters['#shape'] = valueShape;
    }

    else {
      delete filters['#shape'];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  }

  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    var filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values

      console.log(Object.keys(filters)[0]);
      console.log(Object.keys(filters).length);
      for (var x = 0; x < Object.keys(filters).length; x++){
        console.log(Object.keys(filters)[0]);
        console.log(Object.values(filters)[x]);
      }

 
      for (var x = 0; x < Object.keys(filters).length; x++)
      {
      if (filters['#datetime']) {
        filteredData = filteredData.filter(row => row.datetime === filters['#datetime']);
      }

      if (filters['#city']) {
      filteredData = filteredData.filter(row => row.city === filters['#city']);
      }

      if (filters['#state']) {
        filteredData = filteredData.filter(row => row.state === filters['#state']);
      }

      if (filters['#country']) {
        filteredData = filteredData.filter(row => row.country === filters['#country']);
      }

      if (filters['#shape']) {
        filteredData = filteredData.filter(row => row.shape === filters['#shape']);
      }      
      } 
      
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  
  }
  
  // 2. Attach an event to listen for changes to each filter
  const input = document.querySelectorAll('input');  
  
  for (var i = 0; i < input.length; i++){ 
    input[i].addEventListener('change', updateValue);
  }
  function updateValue(e) {
    updateFilters() 
  }
  
  // Build the table when the page loads
  buildTable(tableData);
