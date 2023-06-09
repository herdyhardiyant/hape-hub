
import './App.css'

const phoneDummy = 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12/Black/Apple-iPhone-12-Black-thumbnail.png'

function App() {
 

  return (
    <>
     <div className='flex flex-row items-center justify-between align-middle bg-stone-800 p-4 px-6 h-20 shadow-lg'>
      <h1 className='text-4xl '>Hape Hub_@</h1>
      <div className='flex flex-row gap-4'>
        <p className=''>register</p>
        <p className=''>login</p>
      </div>
      
     </div>
    <br />
     <div className='p-8'>

      <div className='flex flex-col relative justify-between bg-stone-800 w-64 h-64 p-4 rounded-lg shadow-lg '>
        <img className='object-contain w-full h-2/3 ' src={phoneDummy} alt="Phone dummy" />
        <div className='absolute bottom-0'>
          <h3>Phone Name #1113</h3>
          <p>Price: $1000</p>
        </div>
    
      </div>


     </div>
    </>
  )
}

export default App
