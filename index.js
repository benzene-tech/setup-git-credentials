const core = require('@actions/core')
const exec = require('@actions/exec')
const stateHelper = require('lib/state_helper')

async function run() {
    const host = core.getInput('host')
    const token = core.getInput('token', {
        required: true
    })

    const replaceWithURLArg = `url.https://${token}@${host}.insteadOf`
    const toBeReplacedURLArg = `https://${host}`

    core.saveState('Replace with URL', replaceWithURLArg)
    core.saveState('URL to be replaced', toBeReplacedURLArg)

    await exec.exec('git config --global', [replaceWithURLArg, toBeReplacedURLArg], {
        silent: true
    })
}

async function cleanup() {
    const replaceWithURLArg = core.getState('Replace with URL')
    const toBeReplacedURLArg = core.getState('URL to be replaced')

    await exec.exec('git config --global --unset', [replaceWithURLArg, toBeReplacedURLArg], {
        silent: true,
        ignoreReturnCode: true
    })
}


if (!stateHelper.isPost) {
    run().catch(error => {
        core.setFailed(error)
    })
} else {
    cleanup().catch(error => {
        core.setFailed(error)
    })
}
