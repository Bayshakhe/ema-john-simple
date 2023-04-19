import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
// import Shop from './components/shop/Shop'

function App() {

  return (
    <div className="App w-full mx-auto" style={{maxWidth: '1400px'}}>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
