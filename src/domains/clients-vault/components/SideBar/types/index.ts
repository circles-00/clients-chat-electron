import { TClient } from '../../..'

export interface ISidebar {
  clients: TClient[]
  currentClient: TClient | null
  setCurrentClient: (client: TClient) => void
}
