import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col md:h-screen items-center justify-center text-white border border-blue-400 px-2">
      <h1 className="text-2xl font-bold mb-14">ChatGPT Clone</h1>

      <div className='flex flex-col md:flex-row space-x-2 space-y-5'>
        <div>
        <div className="flex flex-col items-center justify-center mb-5">
          {/* Sun Icon */}
          <SunIcon className='h-6 w-6'/>
          <p className='text-xs'>Examples</p>
        </div>

        <div className="space-y-1">
          <p className="infoText">"Explain quantum computing in simple terms"</p>
          <p className="infoText">"What is the difference between a dog and a cat?"</p>
          <p className="infoText">"How do I make an HTTP request in JavaScript?"</p>
        </div>
        </div>
      
        <div>
        <div className="flex flex-col items-center justify-center mb-5">
          {/* Bolt Icon */}
          <BoltIcon className='h-6 w-6'/>
          <p className='text-xs'>Capabilities</p>
        </div>

        <div className="space-y-1">
          <p className="infoText">Remembers what uses said earlier in the conversation</p>
          <p className="infoText">Allows users to provide follow-up corrections</p>
          <p className="infoText">Trained to decline inappropriate comments</p>
        </div>
        </div>
      
        <div>
        <div className="flex flex-col items-center justify-center mb-5">
          {/* Exclamation Triangle Icon */}
          <ExclamationTriangleIcon className='h-6 w-6'/>
          <p className='text-xs'>Limitations</p>
        </div>

        <div className="space-y-1">
          <p className="infoText">May occasionally generate incorrect information</p>
          <p className="infoText">May occasionally produce harmful or biased content</p>
          <p className="infoText">Limited knowledge of world and events after 2021</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage