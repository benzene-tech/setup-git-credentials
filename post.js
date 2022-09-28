const core = require('@actions/core');
const fs = require('fs');
const { homedir } = require('os');

try {
    fs.unlinkSync(`${homedir()}/.gitconfig`)
}
catch (error) {
    core.info('config was not set');
}
