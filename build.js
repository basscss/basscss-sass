// Compile Basscss source to scss syntax

var fs = require('fs')
var path = require('path')
var cssScss = require('css-scss')
var postcss = require('postcss')
var postcssImport = require('postcss-import')

var modules = [
  'basscss-type-scale',
  'basscss-typography',
  'basscss-layout',
  'basscss-align',
  'basscss-margin',
  'basscss-padding',
  'basscss-grid',
  'basscss-flexbox',
  'basscss-position',
  'basscss-border',
  'basscss-hide'
]

// Build partials
modules.forEach(function (m) {
  var css = '@import "' + m + '";'

  postcss([ postcssImport ])
    .process(css).then(function (result) {
      var scss = cssScss(result.css)
      var filename = '_' + m.replace('basscss-', '') + '.scss'

      fs.writeFileSync(path.join('scss', filename), scss)
    })
})

// Build index
var index = modules.map(function (m) {
  return '@import "' + m.replace(/^basscss\-/,'') + '";'
})

fs.writeFileSync(path.join('scss', 'basscss.scss'), index.join('\n'))

