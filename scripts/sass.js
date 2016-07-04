var sass = require('node-sass');
var fs = require('fs-extra');

var fileIn = './client/sass/fs.sass';
var fileOut = './public/assets/css/fs.css';

sass.render({
    file: fileIn,
    outFile: fileOut,
    outputStyle: 'expanded'
}, function (err, result) {
    if (err) {
        console.log('SASS Compile Error:');
        console.log(err);
        return err;
    }
    fs.outputFile(fileOut, result.css, function (err) {
        if (err) {
            console.log('SASS Save Error:');
            console.log(err);
            return;
        }
        console.log('SASS written:', fileOut);
    });
});
