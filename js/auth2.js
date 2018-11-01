$.ajax({
    // headers : {
    //     'Accept-Encoding':'gzip'
    //      api_key: 'API_KEY'
    // },
    type: 'POST',
    url: "https://tv-server.trinity-tv.net/server/TvServerService/Auth.json",
    device: JSON.stringify({
        mac: '34:FC:EF:D9:C4:B2',
        type: 'DT_SmartTV',
        sub_type: 'DST_TOSHIBA',
        application: {
            type: 'AT_SWEET_TV_Player'
        },
        locale: 'uk'
    }),
    error: function (e) {
        console.log(e);
    },
    dataType: "json",
    contentType: "application/json",
    // success: function (status) {
    //     console.log(status)
    // }
    success: function (response) {
        if (response.status === 'OK') {
            var accessToken = response.data.auth_token;
            alert(accessToken);
        }
    }
});

// function Facebook_login() {
//     FB.getLoginStatus(function (response) {
//         if (response.status === 'connected') {
//             var uid = response.authResponse.userID;
//             var accessToken = response.authResponse.accessToken;
//             alert(accessToken);
//         }
//     });
// }