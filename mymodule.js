
var fs = require('fs')
var path = require('path')

module.exports.calc = function (dir, ext, callback){

fs.readdir(dir, function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + ext)
          return(file);
          console.log(file)
      });
    });

};







/*

fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/

