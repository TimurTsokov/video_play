// {"auth_token":"bfae2c5899b64063dd9e4e3be9c96d30","company_id":2,"status":"OK","ttl":86400}

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
    header: {
        'Accept-Encoding': 'gzip',
        'auth-key': 'value'
    },
    type: 'POST',
    url: "https://tv-server.trinity-tv.net/server/TvServerService/Auth.json",
    data: JSON.stringify({
        device: {
            mac: '34:FC:EF:D9:C4:B2',
            type: 'DT_SmartTV',
            sub_type: 'DST_TOSHIBA',
            application: {
                type: 'AT_SWEET_TV_Player'
            },
            locale: 'uk'
        }
    }),

    dataType: 'json',
    contentType: "application/json",

    success: function (status, response, request) {
        var obj = JSON.parse(request.responseText);
        console.log('Auth', obj);
        if (status == 500) {
            alert('Запрос неверно сформировани или ошибка сервера')
        }
    },
    error: function (e) {
        console.log(e);
    }
    // success: function (resp, status, xhr) {
    //     var msg = "result is: " + resp.result + ", Start: " + resp.start + ", End: " + resp.end + ", issues: " + resp.issues;
    //     jQuery("#successPost").html(msg + " - STATUS: " + xhr.status + " " + xhr.statusText);
    // },
    // error: function (resp, status, xhr) {
    //     alert("Error: " + resp.e);
    //     jQuery("#errorPost").html("Error: " + resp.e + " - STATUS: " + xhr.status + " " + xhr.statusText);
    // }
    // response: function () {}
});

//////////////////////////////////////////////////////////////////////////
$.ajax({
    type: 'POST',
    url: 'https://tv-server.trinity-tv.net/server/TvServerService/GetChannels.json',
    data: JSON.stringify({
        auth: 'bfae2c5899b64063dd9e4e3be9c96d30',
        need_icons: true,
        need_epg: true,
        need_offsets: false,
        need_categories: true
        // epg_start_offset: 6,
        // epg_stop_offset: 7,
        // channels: 5,
        // category: 9
    }),
    dataType: 'json',
    contentType: "application/json",

    success: function (status, response, request) {
        var obj = JSON.parse(request.responseText);
        console.log('GetChannels', obj);
    }
    // error: function (e) {
    //     console.log(e);
    // }
});
///////////////////////////////////////////////////////////////////
$.ajax({
    type: 'POST',
    url: 'https://tv-server.trinity-tv.net/server/TvServerService/OpenStream.json',
    data: JSON.stringify({
        auth: 'bfae2c5899b64063dd9e4e3be9c96d30',
        channel_id: 15,
        offset_id: 3,
        accept_scheme: 4,
        first_batch_size: 5

    }),
    dataType: 'json',
    contentType: "application/json",

    success: function (status, response, request) {
        var obj = JSON.parse(request.responseText);
        console.log('OpenStream', obj);
    }
});
////////////////////////////////////////////////
$.ajax({
    type: 'POST',
    url: 'https://tv-server.trinity-tv.net/server/TvServerService/UpdateStream.json',
    data: JSON.stringify({
        auth: 'bfae2c5899b64063dd9e4e3be9c96d30',
        stream_id: 2
    }),
    dataType: 'json',
    contentType: "application/json",
    success: function (status, response, request) {
        var obj = JSON.parse(request.responseText);
        console.log('UpdateStream', obj);
    }
});
///////////////////////////////////////////////////////
$.ajax({
    type: 'POST',
    url: 'https://tv-server.trinity-tv.net/server/TvServerService/CloseStream.json',
    data: JSON.stringify({
        auth: 'bfae2c5899b64063dd9e4e3be9c96d30',
        stream_id: 2
    }),
    dataType: 'json',
    contentType: "application/json",
    success: function (status, response, request) {
        var obj = JSON.parse(request.responseText);
        console.log('CloseStream', obj);
    }
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