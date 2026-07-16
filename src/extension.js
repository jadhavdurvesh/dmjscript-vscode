const vscode = require('vscode');
const path = require('path');

function activate(context) {

    const statusBar = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left
    );

    statusBar.text = "$(terminal) DMJScript Ready";
    statusBar.show();

    context.subscriptions.push(statusBar);

    let disposable = vscode.commands.registerCommand(
        'dmjscript.run',
        function () {

            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                vscode.window.showErrorMessage(
                    'No DMJScript file open.'
                );
                return;
            }

            const filePath = editor.document.fileName;

            const terminal = vscode.window.createTerminal(
                "DMJScript"
            );

            terminal.show();

           const compilerPath = path.join(
    context.extensionPath,
    "compiler",
    "dmjc.exe"
);

terminal.sendText(
    `& "${compilerPath}" run "${filePath}"`
);

            vscode.window.showInformationMessage(
                'Running DMJScript file...'
            );
        }
    );

    context.subscriptions.push(disposable);

    console.log("DMJScript extension loaded!");
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};