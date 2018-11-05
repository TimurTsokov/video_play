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
                        src: $sce.trustAsResourceUrl("http://stream.mytrinity.com.ua:4021/stream/rb6bv97j43syj6zz2jtkk96tsvbvspue6m7qkx6e8yb38f5vpv637pprhrq55hf64d66we4duf4dcrx9qzbqcbjt9xb2sd73maapfpv69j3r35kt3cycbi3nxfc5wah82hvqss42d4xce3s"),
                        type: "application/x-mpegURL"
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
                    {
                        src: $sce.trustAsResourceUrl("http://stream.mytrinity.com.ua:4021/stream/rb6bv97j43syj6zz2jtkk96tsvbvspue6m7qkx6e8yb38f5vpv637pprhrq55hf64d66we4duf4dcrx9qzbqcbjt9xb2sd73maapfpv69j3r35kt3cycbi3nxfc5wah82hvqss42d4xce3s"),
                        type: "application/x-mpegURL"
                    }
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
