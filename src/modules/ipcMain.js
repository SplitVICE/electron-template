const { ipcMain } = require('electron');
module.exports = (app, mainWindow) => {
    // prints on console data received from Renderer Process
    ipcMain.on('data send', (e, args) => {
        console.log(args);
    });

    // Sends a response to the Renderer Process window
    ipcMain.on('ping', e => {
        mainWindow.webContents.send('pong');
    });

    // Sends a response to the Renderer Process window synchronously
    ipcMain.on('hi', (e, data) => {
        e.returnValue = 'Hi ' + data;
    });

    ipcMain.on('close', e => {
        app.quit();
    });
}