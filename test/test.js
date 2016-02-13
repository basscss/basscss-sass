
var fs = require('fs')
var path = require('path')
var assert = require('assert')
var sass = require('node-sass')

var filenames = fs.readdirSync(path.join(__dirname, '../scss'))
  .filter(function (name) {
    return name.match(/\.scss$/)
  })

var files = filenames.map(function (filename) {
  var src = fs.readFileSync(path.join(__dirname, '../scss', filename), 'utf8')
  return { src: src, name: filename }
})

var index = {
  name: 'index',
  src: fs.readFileSync(path.join(__dirname, '../scss/basscss.scss'), 'utf8')
}

describe('basscss-sass', function () {
  function renderSass (file) {
    it('should compile scss for ' + file.name, function () {
      assert.doesNotThrow(function () {
        sass.renderSync({
          data: file.src,
          includePaths: [
            path.join(__dirname, '../scss')
          ]
        })
      })
    })
  }

  files.forEach(renderSass)
  renderSass(index)
})

