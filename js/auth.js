window.onload = function () {
    document.querySelector('#my-chen').onclick = function () {
        ajaxPost();
    }
};
function ajaxPost() {
    var request = new XMLHttpRequest();
    var url = 'https://tv-server.trinity-tv.net/server/TvServerService/Auth.json';
    var device = {
        mac: '34:FC:EF:D9:C4:B2',
        type: 'DT_SmartTV',
        sub_type: 'DST_TOSHIBA',
        application:{
            type: 'AT_SWEET_TV_Player'
        }
    };

    request.onreadystatechange = function () {
        // if (request.readyState == 4 && request.status == 200) {
        //     console.log(this.responseText);
        //    // document.getElementById("demo").innerHTML = request.responseText;
        // } else if (request.status == 500) {
        //     console.log(this.responseText);
        // }
        if (request.readyState != 4) return;
        if (request.status == 200) {
            var resp = JSON.parse(request.responseText);
            if (resp.status == 'OK') {
                alert(resp.message);
            } else {
                alert('Error: ' + resp.message)
            }
        } else {
            alert('Error: ' + request.statusText);
        }
    };
    request.open('POST', url, true);
   // request.setRequestHeader("cache-control", "no-cache");
   // request.setRequestHeader("Postman-Token", "888188d5-2265-4b30-ab8f-618579021785");

    request.send(device);
}

// $.ajax({
//     type: 'POST',
//     url: "https://tv-server.trinity-tv.net/server/TvServerService/Auth.json",
//     data: JSON.stringify({
//         // "subject:title":"Test Name",
//         // "subject:description":"Creating test subject to check POST method API",
//         // "sub:tags": ["facebook:work", "facebook:likes"],
//         // "sampleSize" : 10,
//         // "values": ["science", "machine-learning"]
//         mac: '34:FC:EF:D9:C4:B2',
//         type: 'DT_SmartTV',
//         sub_type: 'DST_TOSHIBA',
//         application:{
//             type: 'AT_SWEET_TV_Player'
//         }
//     }),
//     error: function(e) {
//         console.log(e);
//     },
//     dataType: "json",
//     contentType: "application/json"
// });