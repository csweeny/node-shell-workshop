const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd.slice(0, 2) === 'cat') {
        cat (cmd.split(' ')[1])
    }

    if (cmd === 'pwd') pwd()

    else if (cmd === 'ls') ls()
})


