function loadCharacters(imageId) {
    // get id of the clicked image
    // var imageID = this.id;
    
    //create a new ajax object
    var ajax = new XMLHttpRequest();

    // when the page is loaded have a callback function prefill our div
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById("infoDiv").innerHTML = ajax.responseText; 
        }
    };

    // open requested file and transmit the data
    ajax.open('GET', imageId +'.html', true);
    ajax.send();
};

//  'https://cors-anywhere/' - use when crossreferencing another website

    