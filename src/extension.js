const vscode = require('vscode');

console.log("DMJScript extension loaded!");

function activate(context) {

    console.log("DMJScript activated!");

    let disposable = vscode.commands.registerCommand(
        'dmjscript.run',
        function () {

            vscode.window.showInformationMessage(
                'DMJScript Run button clicked!'
            );

        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};