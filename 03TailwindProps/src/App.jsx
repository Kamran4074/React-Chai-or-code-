import './App.css'
import Card from './components/card';
function App() {
  let myobj={
    name: 'Kamran',
    age: 23
  }
  let arr=[1,3,5,6,8]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind</h1>
      <Card username="Chai" btn='click'/>
      <br />
      <Card username='Code' btn='Press'/>
    </>
  )
}

export default App
