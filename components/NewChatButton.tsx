import { PlusIcon } from "@heroicons/react/24/solid";

function NewChatButton() {
  return (
    <div className="flex items-center border border-gray-600 chatRow">
        <PlusIcon className="h-4 w-4" />
        <p>New chat</p>
    </div>
  )
}

export default NewChatButton