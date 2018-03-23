$(function () {
    var feed = new Instafeed({
        get: 'user',
        userId: 538737859,
        accessToken: '5319357508.c97443f.85534bb0ee23471cb5d5bdab0cfcd91a',
        limit: 6,
        resolution: 'low_resolution',
    });
    feed.run();
});