module.exports = {
    extends: ['@commitlint/cli', '@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // A new feature
                'fix', // A bug fix
                'docs', // Documentation only changes
                'style', // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
                'refactor', // A code change that neither fixes a bug nor adds a feature
                'perf', // A code change that improves performance
                'test', // Adding missing or correcting existing tests
                'build', // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
                'ci', // Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
                'chore', // Changes to the build process or auxiliary tools and libraries such as documentation generation
                'revert', // Reverts a previous commit,
                'server', // Changes related to server configuration or setup
                'client', // Changes related to client-side code
            ]
        ],
        'subject-case': [2, 'always', 'sentence-case']
    }
}
