function absen() {
    var currentTime = new Date();
    var formattedTime = currentTime.toLocaleTimeString();
    
    var absensiList = document.getElementById("absensiList");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode("Absen pada: " + formattedTime));
    
    absensiList.appendChild(listItem);
}