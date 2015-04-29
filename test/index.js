/* global it */

var btr = require('../index.js');
require('should');

it('should render btrjson', function (done) {
    var stream = btr({
        block: 'button'
    }, 'index.html');

    stream.on('data', function (file) {
        file.contents.toString().should.eql('<div class="button" data-block="button" data-uniq="root"></div>');
        done();
    });

    stream.end();
});