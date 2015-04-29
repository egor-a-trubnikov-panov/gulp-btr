var through = require('through2'),
    File = require('vinyl'),
    BTR = require('btr');

module.exports = function (bemjson, fileName) {
    var btr = new BTR.BTR();

    function apply(obj, enc, cb) {
        eval(obj.contents.toString(enc));
        cb(null);
    }

    function compile() {

        var outputFile;

        try {
            outputFile = new File({
                base: '',
                cwd: '',
                path: fileName,
                contents: new Buffer(btr.apply(bemjson))
            });
        } catch (err) {
            this.emit('error', err);
        }

        this.emit('data', outputFile);
        this.emit('end');
    }

    var rs = through.obj(apply, compile);

    return rs;
};
