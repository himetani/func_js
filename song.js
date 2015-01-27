var _ = require('lodash');

function lyricsSegment(n) {
    return _.chain([])
        .push(n + "本のビールが残ってる")
        .push(n + "本のビール")
        .push("ひとつ取って、隣に回せ")
        .tap(function(lyrics) {
            if ( n > 1) {
                lyrics.push((n-1) + "本のビールが残ってる");
            } else {
                lyrics.push("もうビールは残っていない");
            }})
        .value();

}

function song(start, end, lyricGen) {
    return _.reduce(_.range(start, end, -1),
            function(acc, n) {
                return acc.concat(lyricGen(n));
            }, []);
}



console.log(song(10,0,lyricsSegment));

