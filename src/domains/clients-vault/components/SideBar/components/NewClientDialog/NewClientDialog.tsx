import { useState, type FC } from 'react'
import { INewClientDialogProps } from './types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../../../../../components'

export const NewClientDialog: FC<INewClientDialogProps> = ({
  isNewChatDialogOpen,
  onCloseNewChatDialog,
}) => {
  const [newUrl, setNewUrl] = useState('')
  const [newAlias, setNewAlias] = useState('')

  return (
    <Dialog onOpenChange={onCloseNewChatDialog} open={isNewChatDialogOpen}>
      <DialogContent className="text-white">
        <DialogHeader>
          <DialogTitle>Add new chat account</DialogTitle>
          <DialogDescription>
            Please input the URL from the platform where you're trying to sign
            in, as well as the alias for this account
          </DialogDescription>
        </DialogHeader>
        <label htmlFor="url">URL (required)</label>
        <input
          id="url"
          onChange={({ target: { value } }) => setNewUrl(value)}
          className="pl-1 rounded-md py-2 border-2 border-gray-200 text-black outline-1 outline-black"
          type="text"
          placeholder="https://facebook.com"
        />
        <label htmlFor="alias">Alias (required)</label>
        <input
          id="alias"
          onChange={({ target: { value } }) => setNewAlias(value)}
          className="pl-1 rounded-md py-2 border-2 border-gray-200 text-black outline-1 outline-black"
          type="text"
          placeholder="e.g circles-facebook"
        />
        <button className="ml-auto">Submit</button>
      </DialogContent>
    </Dialog>
  )
}
