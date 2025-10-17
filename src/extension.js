const vscode = require('vscode');

function activate(context) {
    console.log('Extension "Hello World" is now active!');

    let disposable = vscode.commands.registerCommand('hello-world.sayHello', function () {
        
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
