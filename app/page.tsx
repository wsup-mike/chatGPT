

function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white border border-blue-400 px-2">
      <h1 className="text-4xl font-bold mb-20 border border-yellow-400 ">ChatGPT4</h1>

      <div className="border border-blue-500">
        <div className="flex flex-col items-center justify-center mb-5 border border-red-500">
          {/* Sun Icon */}
          <h2>Examples</h2>
        </div>

        <div className="space-y-2">
          <p className="infoText">"Explain something to me."</p>
          <p className="infoText">"What is the difference between a dog and a cat?"</p>
          <p className="infoText">"What is the color of the sun?"</p>
        </div>

      </div>
    </div>
  )
}

export default HomePage