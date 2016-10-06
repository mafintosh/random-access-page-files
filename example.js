var pages = require('./')

var storage = pages('tmp')

storage.write(222852525, new Buffer('hello'), function (err) {
  if (err) throw err
  storage.read(222852525, 5, function (err, buf) {
    if (err) throw err
    console.log(buf)
  })
})
