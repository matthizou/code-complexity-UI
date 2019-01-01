const fs = require('fs')

const DATA_FOLDER = './data'

module.exports = {
  getDates() {
    const children = fs.readdirSync(DATA_FOLDER)
    return children
  },
}
