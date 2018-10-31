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
                    {src: $sce.trustAsResourceUrl(""), type: "video/mp4"}
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
