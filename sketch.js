var endpoint = "https://o1pg4wli4c.execute-api.ap-northeast-1.amazonaws.com/default/nameCardLog2";

function postData2(data = {}) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //console.log(xhttp.responseText);
        console.log("Success!");
      }
    };
    xhttp.open('POST', endpoint, true);
    //xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(data));
}
