import { type FC } from 'react'

interface IClientIconProps {
  isCurrentClient: boolean
  setCurrentClient: () => void
  thumbnail?: string
}

export const ClientIcon: FC<IClientIconProps> = ({
  isCurrentClient,
  setCurrentClient,
  thumbnail,
}) => {
  return (
    <button
      onClick={setCurrentClient}
      className={`rounded-md py-2 ${
        isCurrentClient
          ? 'border-green-500 border-2'
          : 'border-white border-[1px]'
      }`}
    >
      <img src={thumbnail} alt="thumbnail" className="w-8 h-8 mx-auto" />
    </button>
  )
}
