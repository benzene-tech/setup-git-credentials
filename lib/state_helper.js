const core = require('@actions/core')

export const isPost = !!core.getState(`Is Post`)

if (!isPost) {
    core.saveState(`Is Post`, `true`)
}
