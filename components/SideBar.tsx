import NewChatButton from "./NewChatButton";


function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/* New Chat Button */}
                <NewChatButton />
                {/* Model Selection Dropdown */}
                <div>

                </div>

                {/* Chat List - Map thru the ChatRows */}

            </div>

        </div>

    </div>
  )
}

export default SideBar