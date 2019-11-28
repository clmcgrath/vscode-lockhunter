'use strict';

import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
export enum PathType {
    withFilePath, 
    withFileDirectoryPath,
    withWorkSpacePath
}


// file_or_folder_path - the path to a file, a folder or a leading part of the path. E.g. K:, C:\Program Files, C:\Docume.
// /unlock or -u - unlocks the file_or_folder_path. It closes all handles to the files\folder that starts from file_or_folder_path and unloads .dlls which are residing in the files\folder that starts from file_or_folder_path.
// /delete or -d - unlocks and deletes the file_or_folder_path. If file_or_folder_path is a partial name of a path (e.g. "c:\Docu" is a partial name of "C:\Documents and Settings"), all the files and folders that starts from file_or_folder_path will be deleted. Note, if there's processes launched from file_or_folder_path they will prevent to delete the folder\file. Use /kill parameter to forcibly terminate such apps.
// /delperm or -dp - an optional parameter for /delete asking the program to delete the file_or_folder_path permanently bypassing the recycle bin. Use it only with /delete parameter, e.g. LockHunter.exe /delete /delperm c:\somefile.exe
// /kill or -k - terminates all the apps which are launched from file_or_folder_path. If file_or_folder_path is a partial name of a path (e.g. "c:\Docu" is a partial name of "C:\Documents and Settings"), all the processes which launch paths start from file_or_folder_path string will be terminated.
// /silent or -sm - no GUI will be displayed. The program starts in silent mode, does one of the passed commands (e.g. /unlock) and terminates.
// /exit or -x - exits automatically when all actions are done. This option might be required only when you wish to see the GUI, all displayed warnings but do not wish to press the button "exit" manually.

export class Lockhunter {

    public static viewWorkspace(){
        this.run("", PathType.withWorkSpacePath);
    }
    public static viewFile(){
        this.run(""), PathType.withFilePath;
    }
    public static viewFileDirectory(){
        this.run("", PathType.withFileDirectoryPath);
    }
    public static unlockWorkspace(){
        this.run("", PathType.withWorkSpacePath);
    }
    public static unlockFile(){
        this.run("", PathType.withFilePath);
    }
    public static unlockFileDirectory(){
        this.run("", PathType.withFileDirectoryPath);
    }
    



    private static run(command: string = null, pathType: PathType = PathType.withWorkSpacePath, additionalParams: string = null){
        
        let targetPath = (requestedPathType: PathType, path :string) => {

            switch (requestedPathType) {
                case PathType.withFileDirectoryPath: 
                    return this.getWorkingFileDirectory()
                case PathType.withWorkSpacePath: 
                    return this.getWorkspaceDirectory()
                case PathType.withFilePath: 
                    return this.getWorkingFile()
                default: 
                    return this.getWorkspaceDirectory()                    
                
            }
        }

        
        
        let launcherPath = vscode.workspace.getConfiguration("lockhunter").get("launcherPath");
        let cmd = `"${launcherPath}" ${command}`;


        require("child_process").exec(cmd); 
    }

    private static getWorkspaceDirectory(){
        if (vscode.workspace.rootPath){
            return vscode.workspace.rootPath;
        }
        let currentFile = this.getWorkingFile();
        if (currentFile){
            return path.dirname(currentFile);
        }
        return null;
    }

    private static getWorkingFileDirectory(){
        if (vscode.window.activeTextEditor){
            
            return path.dirname(this.getWorkingFile())
            
        }
        return null;
    }

    private static getWorkingFile(){
        if (vscode.window.activeTextEditor){
            return vscode.window.activeTextEditor.document.fileName;
        }
        return null;
    }
}