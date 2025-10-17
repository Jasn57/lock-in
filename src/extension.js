const vscode = require('vscode');

let locked = false;

function activate(context) {
    console.log('Lock In extension is now active.');

    const lockCommand = vscode.commands.registerCommand('lockin.lock', () => {
        locked = true;
        vscode.window.showInformationMessage('app locked');
    });

    const unlockCommand = vscode.commands.registerCommand('lockin.unlock', () => {
        locked = false;
        vscode.window.showInformationMessage('app unlocked');
    });

function deactivate() {}

module.exports = { activate, deactivate };
