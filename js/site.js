$(function () {
    var feed = new Instafeed({
        get: 'user',
        userId: 538737859,
        accessToken: '538737859.8bcd5c5.dd19335ca70d4ece92d72449a9330db4',
        limit: 6,
        resolution: 'low_resolution',
    });
    feed.run();
});