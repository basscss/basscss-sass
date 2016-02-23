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

var addons = [
  'basscss-addons/modules/all',
  'basscss-addons/modules/background-colors',
  'basscss-addons/modules/background-images',
  'basscss-addons/modules/border-colors',
  'basscss-addons/modules/btn',
  'basscss-addons/modules/btn-outline',
  'basscss-addons/modules/btn-primary',
  'basscss-addons/modules/colors',
  'basscss-addons/modules/darken',
  'basscss-addons/modules/forms',
  'basscss-addons/modules/highlight-dark',
  'basscss-addons/modules/highlight',
  'basscss-addons/modules/input-range',
  'basscss-addons/modules/lighten',
  'basscss-addons/modules/media-object',
  'basscss-addons/modules/progress',
  'basscss-addons/modules/responsive-margin',
  'basscss-addons/modules/responsive-padding'
]

var modulePrefixRegex = /^basscss\-addons\/modules\/|^basscss\-/

// Build partials

function buildPartial (m) {
  var css = '@import "' + m + '";'

  postcss([ postcssImport ])
    .process(css).then(function (result) {
      var scss = cssScss(result.css)
      var shortname = m.replace(modulePrefixRegex, '')
      var filename = '_' + shortname + '.scss'

      fs.writeFileSync(path.join('scss', filename), scss)
    })
}

function writeIndexFile(modulesToImport, fileName) {
  var fileContents = modulesToImport.map(function (m) {
    return '@import "' + m.replace(modulePrefixRegex,'') + '";'
  })

  fs.writeFileSync(path.join('scss', fileName), fileContents.join('\n'))
}

modules.forEach(buildPartial)
addons.forEach(buildPartial)

writeIndexFile(modules, 'basscss.scss')
writeIndexFile(addons, 'basscss-addons.scss')
