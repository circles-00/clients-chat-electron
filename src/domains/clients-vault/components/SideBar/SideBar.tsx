import { PlusIcon } from 'lucide-react'
import { FC, useState } from 'react'
import { ClientIcon, NewClientDialog } from './components'
import { ISidebar } from './types'

export const SideBar: FC<ISidebar> = ({
  clients,
  currentClient,
  setCurrentClient,
}) => {
  const [isNewChatDialogOpen, setIsNewChatDialogOpen] = useState(false)

  return (
    <>
      <div className="w-16 h-screen bg-blue-700 flex flex-col gap-4 px-2 pt-5">
        {clients?.map((client, idx) => (
          <ClientIcon
            key={idx}
            isCurrentClient={currentClient?.url === client.url}
            setCurrentClient={() => setCurrentClient(client)}
            thumbnail={client.thumbnail}
          />
        ))}
        <button onClick={() => setIsNewChatDialogOpen(true)}>
          <PlusIcon className="bg-none w-8 h-8 text-white mx-auto mt-5" />
        </button>
        <NewClientDialog
          isNewChatDialogOpen={isNewChatDialogOpen}
          onCloseNewChatDialog={() => setIsNewChatDialogOpen(false)}
        />
      </div>
    </>
  )
}
