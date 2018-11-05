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
            alert('Запрос неверно сформировани, ошибка сервера')
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
        need_categories: true,
        epg_start_offset: 6,
        epg_stop_offset: 7,
        channels: 5,
        category: 9
    }),
    dataType: 'json',
    contentType: "application/json",

    // beforeSend: function(xhr){
    //     var readystatehook = xhr.onreadystatechange;
    //
    //     xhr.onreadystatechange = function(){
    //         readystatehook.apply(this, []);
    //         console.log('ul');
    //     };
    // },
    success: function (data) {
        // data = JSON.parse(request.responseText);
        console.log('GetChannels', data);
        // var data = $(response).push($(list.arr[1]).html());
        // var some = JSON.parse(data);
        // for( var i=0; i<some.length; i++){
        //     $('#successPost').text(list);
        // }
        // var channels = [];
        // $('#successPost').text(data.name);
        //  var  list = function (data) {
        //     $('#successPost').append(data.list)
        // }
        // data = jQuery.parseJSON(data);
        // $.each(data, function (index, item) {
        //     $('.channels__list').append('<li>' + item.toString() + '<a>' + item.name + '</a></li>')
        // });
        // var out = '';
        // for (var key in data) {
        //
        //         out += '<ul class="channels__list">';
        //         out += '<li><img src="' + data[key].list[0].icon_url + '" alt=""><h3>' + data[key].list[0].name + '</h3></li>';
        //         out += '</ul>';
        //
        // }
        // $('#result').html(out);

        // for (var key2 in data[key])
        //     for (var key3 in data[key][key2])
        // $('.channels__list').append('<li><img src="${data[key].icon_url}">' + key + '' + data[key]+ '<a>' + ${data[key].name} + '</a></li>')

        // $('.channels__list').append('<li><img src = "">' + data[key][key2].name + '</li>');

        // $('.channels__list').html(data[1][0][9]);


        // }
        // $.each( data, function( key, value ) {
        //     if($.inArray(list.id, data ) == 0){
        //         $('.channels__list').append('<li>' + value.icon_url + ": " + value.name + '</li>');
        //     }
        // });
        // var out = '';
        // for (var icon_url in data) {
        //     out += `<li><img src = ${data[icon_url]}></li>`
        // }
        // $('.channels__list').append(out);

        var out = '';
        out += '<ul class="channels__list">';
        out += '<li class="channels__list-item"><img src="' + data.list[0].icon_url + '" alt=""><h2>' + data.list[0].name + '</h2></li>';
        out += '<li class="channels__list-item"><img src="' + data.list[1].icon_url + '" alt=""><h2>' + data.list[1].name + '</h2></li>';
        out += '<li class="channels__list-item"><img src="' + data.list[2].icon_url + '" alt=""><h2>' + data.list[2].name + '</h2></li>';
        out += '</ul>';
        $('#ch_list').html(out);

        // console.log(data.list[0].name);
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
        accept_scheme: 'HTTP_HLS',
        first_batch_size: 5

    }),
    dataType: 'json',
    contentType: "application/json",

    success: function (data) {
        console.log('OpenStream', data);

        // $('.channels__list-item').on('click', function () {

        var str = '';
        str += '<video>';
        str += '<source src="' + data.http_stream.url + '" type="video/mp4">';
        str += '</video>';
        // console.log(str);
        $('#stream').html(str);
        // });

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