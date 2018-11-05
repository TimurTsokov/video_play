'use strict';
angular.module('myApp',
    [
        "ngSanitize",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls"
    ]
)
    .controller('HomeCtrl',
        function ($sce) {
            this.config = {
                preload: "none",
                sources: [
                    {
                        src: $sce.trustAsResourceUrl("http://stream.mytrinity.com.ua:4021/stream/bze9cuhtq2c7yef7s9xewc26x78hv266f4fi8k6f3gy82z2ut3hwe3ydqbarwgktay5zikqauqp43wahbykfg7hizi6p9ey9jerwb7v4uev9vs6s9e9tcjaqdkbyrnfwqbbfvj3kt5m39ds.m3u8"),
                        type: "video/m3u8"
                    }
                ],
                tracks: [
                    {
                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                        kind: "subtitles",
                        srclang: "en",
                        label: "English",
                        default: ""
                    }
                ],
                theme: {
                    url: "node_modules/videogular/dist/themes/default/videogular.css"
                }
            };
        }
    )

    .controller('HomeCtrl2',
        ["$sce", function ($sce) {
            this.config = {
                preload: "none",
                sources: [
                    {src: $sce.trustAsResourceUrl(""), type: "video/mp4"}
                ],
                theme: {
                    url: "https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css"
                },
                plugins: {
                    controls: {
                        autoHide: true,
                        autoHideTime: 5000
                    }
                }
            };
        }]
    );
