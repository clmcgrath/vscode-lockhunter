# Lockhunter commands for Visual Studio Code

## Introduction

This project is a fork of the tgit extension and modified for use with lockhunter 

You can execute these commands either by searching for `Lockhunter` in the Command Palette (`Ctrl+Shift+P`), or via keyboard shortcuts.

## Default shortcuts

Global shortcuts:

* `(L)ockhunter (V)iew (F)ile` -Crtl+l Ctrl+v Ctrl+f
* `(L)ockhunter (V)iew File (D)irectory` -Crtl+l Ctrl+v Ctrl+d
* `(L)ockhunter (V)iew (W)orkspace` -Crtl+l Ctrl+v, Ctrl+w

* `(L)ockhunter (U)nlock (F)ile` -Crtl+l Ctrl+u Ctrl+d
* `(L)ockhunter (U)nlock File (D)irectory` -Crtl+l Ctrl+u Ctrl+d
* `(L)ockhunter (U)nlock (Workspace) Directory` -Crtl+l Ctrl+u Ctrl+d

## Extension Settings

This extension contributes the `lockhunter.launcherPath` setting, specifying the full path to `Lockhunter.exe`.
It is set to the default installation path of Lockhunter, so you might need to adjust it if you installed elsewhere.

## Additional Settings 

### Unlock
`lockhunter.exit` exits lockhunter automatically after unlock , defaults to true 

`lockhunter.silentunlocks` runs unlocks in silent mode , no window or confirmation will appear ,  defaults to false  




## TODO 
- Add Context Menu Support for file and directory in browser and editor 
