const core = require('@actions/core');
const { execSync } = require("child_process");

try {
    const token = core.getInput('token');
    const host = core.getInput('host');

    if (token === '') {
        throw new Error('token is undefined');
    }
    if (host === '') {
        throw new Error('host is invalid');
    }

    execSync(`git config --global url."https://${token}@${host}".insteadOf https://${host}`);
}
catch (error) {
    core.setFailed(error.message);
}
