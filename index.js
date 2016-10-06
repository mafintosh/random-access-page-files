var raf = require('random-access-file')
var multi = require('multi-random-access')
var path = require('path')

module.exports = function (folder, opts) {
  if (!opts) opts = {}
  var pageSize = opts.pageSize || 5 * 1024 * 1024
  return multi(opts, function (offset, cb) {
    var pageIndex = Math.floor(offset / pageSize)
    cb(null, {
      start: pageIndex * pageSize,
      end: pageIndex * pageSize + pageSize,
      storage: raf(path.join(folder, pageIndex + '.page'))
    })
  })
}
