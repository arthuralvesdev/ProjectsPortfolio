const fs = require('fs')

fs.writeFile('test.txt', 'Olá, NodeJS', err => {
    console.log(err)
})