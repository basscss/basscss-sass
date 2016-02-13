# basscss-sass

Transpiled Basscss Sass partials

http://basscss.com

This repository is provided as a convenience for users working within a Sass build process.
Basscss is written in standard, spec-compliant CSS, using some new features like [custom media queries](http://dev.w3.org/csswg/mediaqueries/#custom-mq) and [custom properties](http://www.w3.org/TR/css-variables/), and is distributed across multiple modules.

If you have any choice in the matter, I highly recommend using [PostCSS](https://github.com/postcss/postcss) instead of Sass.


## Getting Started

```bash
npm install basscss-sass
```

```bash
bower install basscss-sass
```

## Sass Tips

Using Sass as a preprocessor can cause numerous issues when working on large scale CSS with multiple contributors. I recommend following these tips when using Sass.

- **Never use @extend.** `@extend` is an anti-pattern, and Basscss is not intended to work with this functionality in Sass.
- **Avoid Mixins** Mixins lead to unnecessary complexity, are generally poorly understood, often lead to code bloat, and do not align with Basscss's design principles.
- **Avoid Nesting Selectors** To maintain the composability of Basscss, avoid nesting selectors as much as possible.


## Contributing

**The scss files in this repository are not source files.**
They are transpiled from their respective CSS modules using the
[css-scss](https://github.com/jxnblk/css-scss) module.

Do **not** edit the scss files in this repository.

See <CONTRIBUTING.md> for more.

---

MIT License

