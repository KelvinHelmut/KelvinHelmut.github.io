const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/KelvinHelmut/KelvinHelmut.github.io',
        user: {
            name: 'KelvinHelmut',
            email: 'aek6.io@gmail.com'
        }
    },
    (err) => {
        if (err) {
            console.err(result)
        } else {
            console.log('Deploy Complete!')
        }
    }
)