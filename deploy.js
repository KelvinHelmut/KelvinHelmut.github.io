const ghpages = require('gh-pages');
console.log(ghpages)
ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'KelvinHelmut.github.io.git',
        user: {
            name: 'KelvinHelmut',
            email: 'aek6.io@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)