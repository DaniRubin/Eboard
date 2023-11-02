import "@fontsource/poppins";

import TotalCircleGraph from './components/TotalCircleGraph'
import SatelliteCircleGraph from './components/SatelliteCircleGraph'
import './App.css'

const App = () => {

  return (
    <>
      <h1>Dashboard</h1>
      <TotalCircleGraph/>
      <SatelliteCircleGraph/>
    </>
  )
}

export default App
