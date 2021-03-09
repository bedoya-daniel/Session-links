
function loadData(){
    fetch("Session.json")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            buildTable(data);
            $(`#search-input`).on('keyup', function(){
                var value         = $(this).val()
                var filteredTable = searchTable(value, data)
                buildTable(filteredTable)
            })

            $('th').on('click', function(){
                var column = $(this).data('column')
                var order  = $(this).data('order')
                // var text   = $(this).html()
                console.log(`Column ${column} was clicked. ${order}`)
                // text = text.substring(0, text.length - 1);
                
                if (order == 'desc'){
                   sortedTable = data.sort((a, b) => a[column] > b[column] ? 1 : -1)
                   $(this).data("order","asc");
                   // text += '&#9660'
                }else{
                   sortedTable = data.sort((a, b) => a[column] < b[column] ? 1 : -1)
                   $(this).data("order","desc");
                   // text += '&#9650'
                }
                // $(this).html(text)
                buildTable(sortedTable)
            })
        });
}

function tidyData(row){
    // Parse the content of visitedPages structure
    var rowDate  = row.date;
    var rowTitle = row.title;
    var rowType  = row.type;
    var rowTopic = row.topic;
    var rowURL   = row.URL;    
}

function buildTable(data){
    console.log('buildTable')
    // console.log(data)
    var table = document.getElementById('sessionLinks')

    table.innerHTML = '' // clear table

    for (var i = 0; i < data.length; i++){
        // var colname = `name-${i}`
        // var colage = `age-${i}`
        // var colbirth = `birth-${i}`

        var row = `<tr>
                        <td>${data[i].date}</td>
                        <td>${data[i].title}</td>
                        <td>${data[i].type}</td>
                        <td>${data[i].topic}</td>
                        <td><a href=${data[i].url}>url</a></td>
                  </tr>`
        table.innerHTML += row
    }
}

function searchTable(value, data){
    var filteredData = []
    for(var i = 0; i < data.length; i++){
        value = value.toLowerCase()
        var topic = data[i].topic.toLowerCase()

        if(topic.includes(value)){
            filteredData.push(data[i])
        }
    }
    return filteredData
}


