const { Plugin } = require('@vizality/entities')

module.exports = class GooseModInjector extends Plugin {
    async onStart() {
        eval(await(await fetch('https://api.goosemod.com/inject.js')).text())
    }

    onStop() {

    }
}