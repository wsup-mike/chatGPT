import { SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white border border-blue-400 px-2">
      <h1 className="text-2xl font-bold mb-14">ChatGPT</h1>

      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          {/* Sun Icon */}
          <SunIcon className='h-6 w-6'/>
          <p className='text-xs'>Examples</p>
        </div>

        <div className="space-y-1">
          <p className="infoText">"Explain something to me."</p>
          <p className="infoText">"What is the difference between a dog and a cat?"</p>
          <p className="infoText">"What is the color of the sun?"</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          {/* Sun Icon */}
          <SunIcon className='h-6 w-6'/>
          <p className='text-xs'>Examples</p>
        </div>

        <div className="space-y-1">
          <p className="infoText">"Explain something to me."</p>
          <p className="infoText">"What is the difference between a dog and a cat?"</p>
          <p className="infoText">"What is the color of the sun?"</p>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage