import './App.css'
import Card from './cards/card1'
import mygfImg from './assets/mygf.png';
import dsaImg from './assets/dsa.png';

function App() {
  return (
    <div className='relative min-h-screen w-full flex flex-col items-center justify-start text-black overflow-hidden'>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://cdn.dribbble.com/userupload/42762778/file/original-58daf13173b6775e18015dd88ea531dc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className='relative z-10 flex flex-col items-center justify-center w-full mt-20'>
        <h1 className='font-bold text-8xl text-center'>Gen-Ai</h1>
        <h3 className='text-black font-semibold text-3xl font-mono mt-2 text-center'>Have fun</h3>

  <div className='grid grid-cols-2 gap-8 items-center mt-10 justify-center w-full max-w-4xl px-4 mx-auto'>
          <Card
            title="My Girlfriend"
            description="Chatbot behaves like my GF"
            link="https://mygirlfriend-eta.vercel.app/"
            image={mygfImg}
          />
          <Card
            title="DSA Instructor"
            description="Answers only DSA Questions"
            link="https://ds-ainstructor.vercel.app/"
            image={dsaImg}
          />
          {/* Add more cards here if needed */}
        </div>
      </div>

    </div>
  )
}

export default App
