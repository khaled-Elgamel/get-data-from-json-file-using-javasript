var Name = document.getElementsByTagName("input")[0]
var username = document.getElementsByTagName("input")[1]
var Email = document.getElementsByTagName("input")[2]


username.onblur = function () {
    
    if (username.value.length > 3) {
        error.classList.add("none")
    } else {
        error.classList.remove("none")
    }
}


Email.onfocus = function () {
    Email.value = username.value + "@gmail.com"
}


var clickButton1 = document.getElementsByTagName("button")[0]
clickButton1.onclick = function () {
    var newRow = document.createElement("tr")
    var cell1 = document.createElement("td")
    var cell2 = document.createElement("td")
    var cell3 = document.createElement("td")
    cell1.innerHTML = Name.value
    cell2.innerHTML = username.value
    cell3.innerHTML = Email.value
    newRow.append(cell1, cell2,cell3)
    myTable.append(newRow)
    clickButton1.onclick = ""
}

var clickButton2 = document.getElementsByTagName("button")[1]




clickButton2.onclick = getBackEndData


function getBackEndData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => myFunc(json))
    clickButton2.onclick = ""
}




function myFunc(data) {
    for (var i = 0; i < data.length; i++) {
        var newRow = document.createElement("tr")
        var cell1 = document.createElement("td")
        var cell2 = document.createElement("td")
        var cell3 = document.createElement("td")
        cell1.innerHTML = data[i].name
        cell2.innerHTML = data[i].username
        cell3.innerHTML = data[i].email
        newRow.append(cell1, cell2,cell3)
        myTable.append(newRow)
    }
}








