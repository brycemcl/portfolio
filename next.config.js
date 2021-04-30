const withMDX = require('@next/mdx')({
  options: {},
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX({
  future: {
    webpack5: true,
  },
})
