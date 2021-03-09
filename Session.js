// ADD LINKS TO THE json DICTIONARY FOLLOWING ITS FORMAT
var data = [
    {
        "date"  : "2021-03-01",
        "title" : "Learn Forms in 25 min",
        "type"  : "video",
        "url"   : "https://www.youtube.com/watch?v=fNcJuPIZ2WE"
    },
    {
        "date"  : "2021-03-01",
        "title" : "Validate form data and submitting",
        "type"  : "tutorial",
        "url"   : "http://www.talkerscode.com/webtricks/validate%20the%20form%20data%20before%20and%20after%20submitting%20the%20form.php"
    }
]

function loadData(){
    fetch("Session.json")
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            buildTable(data);
        });
}

function parsePages(){
    // Parse the content of visitedPages structure
    var sessionLinks = document.getElementById("sessionLinks");
    // console.log(data)
    
}

function tidyData(row){
    // Parse the content of visitedPages structure
    var rowDate  = row.date;
    var rowTitle = row.title;
    var rowType  = row.type;
    var rowURL   = row.URL;
    
    // console.log(data)
    
}

function buildTable(data){
    console.log('inside function')
    console.log(data)
    var table = document.getElementById('sessionLinks')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].date}</td>
                        <td>${data[i].title}</td>
                        <td>${data[i].type}</td>
                        <td>${data[i].url}</td>
                  </tr>`
        table.innerHTML += row

    }
}

buildTable(data)

// $(document).ready(function(){
//     $.getJSON("Seesion.json", function(data){
//         console.log(data); // logs data
//         console.log(data[0]); // logs data
//     }).fail(function(){
//         console.log("An error has occurred.");
//     });
// });