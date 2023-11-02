import * as React from 'react';
const { ipcRenderer } = window.require("electron");

export const SendData = () => {
    return (
        <div className="App">
      
            <button onClick={()=>{
      
                ipcRenderer.send('anything-asynchronous', 'ping')
                ipcRenderer.on('asynchronous-reply', (event, arg) => {
                    console.log("Hiii",arg) // prints "Hiii pong"
                    })
      
            }}>Async</button>


            <button onClick={()=>{
                             
                // prints "pong"         
                console.log('sync',ipcRenderer.sendSync('anything-synchronous',   'ping')) 
                             
            
            }}>Sync</button>

        </div>
    );

};