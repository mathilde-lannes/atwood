const {ipcMain, remote} = require('electron')


console.log('redirect required');


ipcMain.on('edit-file', (event, name) => {
    event.sender.getOwnerBrowserWindow().loadURL('localhost:4200/edit')
})