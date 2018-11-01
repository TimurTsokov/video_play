// window.onload = function () {
//     document.querySelector('#my-chen').onclick = function () {
//         ajaxPost();
//     }
// };
// function ajaxPost() {
//     var request = new XMLHttpRequest();
//     var url = 'https://tv-server.trinity-tv.net/server/TvServerService/Auth.json';
//     var device = JSON.stringify({
//          headers: {
//              'Accept-Encoding': 'gzip'
//          },
//         mac: '34:FC:EF:D9:C4:B2',
//         type: 'DT_SmartTV',
//         sub_type: 'DST_TOSHIBA',
//         application: {
//             type: 'AT_SWEET_TV_Player'
//         },
//         locale: 'uk',
//         dataType: "json",
//         contentType: "application/json"
//     });
//
//     request.onreadystatechange = function () {
//         // if (request.readyState == 4 && request.status == 200) {
//         //     console.log(this.responseText);
//         //    // document.getElementById("demo").innerHTML = request.responseText;
//         // } else if (request.status == 500) {
//         //     console.log(this.responseText);
//         // }
//         if (request.readyState != 4) return;
//         if (request.status == 200) {
//             var resp = JSON.parse(request.responseText);
//             if (resp.status == 'OK') {
//                 alert(resp.message);
//             } else {
//                 alert('Error: ' + resp.message)
//             }
//         } else {
//             alert('Error: ' + request.statusText);
//         }
//     };
//     request.open('POST', url, true);
//      // request.setRequestHeader('Authorization', 'key');
//
//     request.send(device);
// }

$.ajax({
    // headers : {
    //     'Accept-Encoding':'gzip'
    // },
    type: 'POST',
    url: "https://tv-server.trinity-tv.net/server/TvServerService/Auth.json",
    data: JSON.stringify({
        mac: '34:FC:EF:D9:C4:B2',
        type: 'DT_SmartTV',
        sub_type: 'DST_TOSHIBA',
        application:{
            type: 'AT_SWEET_TV_Player'
        },
         locale: 'uk'
    }),
    // error: function(e) {
    //     console.log(e);
    // },
    error: function (status) {
        console.log(status)
    },
    dataType: "json",
    contentType: "application/json"
});


// $.ajax({
//     beforeSend: function (xhr) {
//         xhr.setRequestHeader ('Authorization', 'токен');
//     },
//     headers: {
//         'Authorization': 'токен'
//     },
//     type: 'POST',
//     url: "https://tv-server.trinity-tv.net/server/TvServerService/Auth.json",
//     crossDomain: true,
//     dataType: 'jsonp',
//     success: function(results){
//         console.log(results);
//     }
// });