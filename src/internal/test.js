const { ipcMain } = require("electron");
export const sendReply = () => {

    ipcMain.on('anything-asynchronous', (event, arg) => {
        // gets triggered by the async button defined in the App component
        console.log("async", arg) // prints "async ping"
    })

    // gets triggered by the sync button defined in the App component
    ipcMain.on('anything-synchronous', (event, arg) => {
        console.log("sync", arg) // prints "sync ping"
    })
}