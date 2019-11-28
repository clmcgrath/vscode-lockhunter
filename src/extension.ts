'use strict';

import * as vscode from 'vscode';
import { Lockhunter } from './Lockhunter';

export function activate(context: vscode.ExtensionContext) {
    
    context.subscriptions.push(vscode.commands.registerCommand("lockhunter.view.current.directory", () => Lockhunter.viewFileDirectory()));
    context.subscriptions.push(vscode.commands.registerCommand("lockhunter.view.current.file", () => Lockhunter.viewFile()));
    context.subscriptions.push(vscode.commands.registerCommand("lockhunter.view.current.workspace", () => Lockhunter.viewWorkspace()));
    context.subscriptions.push(vscode.commands.registerCommand("lockhunter.view.current.directory", () => Lockhunter.unlockFileDirectory()));
    context.subscriptions.push(vscode.commands.registerCommand("lockhunter.view.current.file", () => Lockhunter.unlockFile()));
    context.subscriptions.push(vscode.commands.registerCommand("lockhunter.view.current.workspace", () => Lockhunter.unlockWorkspace()));

}

export function deactivate() {
}