
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const env = require('./config/env');

var mainWindow = undefined;

function build_window() {
    return new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            // this both options enable Electron to all renderer processes
            nodeIntegration: true,
            contextIsolation: false
        }
    });
}

app.on('ready', () => {
    mainWindow = build_window();
    require('./modules/ipcMain')(app, mainWindow);
    mainWindow.loadFile(path.join(__dirname, 'views/index.html'));
});

if (env.DEV) {
    console.log('DEV mode on');
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
        hardResetMethod: 'exit'
    });
}
