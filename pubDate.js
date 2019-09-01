// https://gist.github.com/samhernandez/5260558

/**
 * Get an RSS pubDate from a Javascript Date instance.
 * @param {Date} [date]
 * @return {string}
 */
function pubDate(date) {

    if (typeof date === 'undefined') {
        date = new Date();
    }

    var pieces     = date.toString().split(' '),
        offsetTime = pieces[5].match(/[-+]\d{4}/),
        offset     = (offsetTime) ? offsetTime : pieces[5],
        parts      = [
            pieces[0] + ',',
            pieces[2],
            pieces[1],
            pieces[3],
            pieces[4],
            offset
        ];

    return parts.join(' ');
}

module.exports = pubDate;
