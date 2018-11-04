$.ajax({
    type: 'GET',
    url: 'https://tv-server.trinity-tv.net/server/TvServerService/GetChannels.json',
    data: JSON.stringify({
        result: {
            ok: 0,
            NoAuth: 1
        },
        status: 1,
        list: 2,
        offsets: 3,
        categogies: 4
    }),
    dataType: 'json',
    contentType: "application/json",
    success: function (data) {
        // data = JSON.parse(request.responseText);
        console.log('GetChannels', data);
        // var data = $(response).push($(list.arr[1]).html());
        //  $(this).addClass('data');
        // var some = JSON.parse(data);
        // for( var i=0; i<some.length; i++){
        //     $('#successPost').text(list);
        // }
        // var channels = [];
        // $('#successPost').html(data);
        //  var  list = function (data) {
        //     $('#successPost').append(data.list)
        // }
        // data = jQuery.parseJSON(data);
        $.each(data, function (i, item) {
            $('.channels__list').append('<li>' + item.categories[i].caption + '<a>' + item.name + '</a></li>')
        });
    },
    error: function (e) {
        console.log(e);
    }
});