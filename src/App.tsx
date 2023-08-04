import { useState } from 'react'
import './App.css'
import { SideBar } from './domains/clients-vault'
import { useEffectOnce, useUpdate } from '@rounik/react-custom-hooks'
import { TClient } from './domains/clients-vault'

function App() {
  const [clients, setClients] = useState<TClient[]>([])
  const [currentClient, setCurrentClient] = useState<TClient | null>(null)

  useUpdate(() => {
    if (!currentClient) {
      setCurrentClient(clients[0])
    }
  }, [clients, currentClient])

  useEffectOnce(() => {
    // @ts-ignore
    window?.electronAPI?.onUpdateClientsList((_event, value) => {
      setClients(value)
    })
  })

  return (
    <div className="flex">
      <SideBar
        clients={clients}
        currentClient={currentClient}
        setCurrentClient={setCurrentClient}
      />
      {currentClient && (
        <webview
          src={currentClient?.url}
          partition={`persist:${currentClient?.alias}`}
          className="w-screen h-screen"
        />
      )}
    </div>
  )
}

export default App
