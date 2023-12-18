import React, { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
  
  import { SocketContext } from '../SocketContext'
  const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
  
    return (
<div className="mx-auto p-8 mb-6 ">
      <div className="bg-white p-3 md:p-8">
        <form className="space-y-2" noValidate autoComplete="off">
          <div className="flex flex-row max-sm:flex-col gap-4 justify-center">
            <div className="md:col-span-6">
              <h6 className="text-lg md:text-xl font-semibold mb-2">Account Info</h6>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={me}>
                <button className="mt-2 bg-blue-500 text-white p-2 w-full" type="button">
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div className="md:col-span-5.75">
              <h6 className="text-lg md:text-xl font-semibold mb-2">Call Other</h6>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                placeholder="Enter ID"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <button
                  className="mt-2 bg-red-500 text-white p-2 w-full"
                  type="button"
                  onClick={leaveCall}
                >
                  Hang Call
                </button>
              ) : (
                <button
                  className="mt-2 bg-blue-500 text-white p-2 w-full"
                  type="button"
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
        
      </div>
    </div>
    )
  }
  
  export default Options
  

