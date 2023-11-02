import * as React from 'react';
const { ipcRenderer } = window.require("electron");

export const SendData = () => {
    return (
        <div className="App">
      
            <button onClick={()=>{
      
                ipcRenderer.send('anything-asynchronous', 'ping')
      
            }}>Async</button>


            <button onClick={()=>{
                             
                // prints "pong"         
                console.log(ipcRenderer.sendSync('anything-synchronous', 'pong')) 
                             
            
            }}>Sync</button>

        </div>
    );

};