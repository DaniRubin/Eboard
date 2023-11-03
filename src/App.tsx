import "@fontsource/poppins";

import TotalCircleGraph from './components/TotalCircleGraph'
import SatelliteCircleGraph from './components/SatelliteCircleGraph'
import './App.css'
import CostumeSelect from "./components/CostumeSelect";
import RealTimeExceptions from "./components/RealTimeExceptions";
import SatelliteProfile from "./components/SatelliteProfile";

const App = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  const downloads = [
    { downloadId: 'chocolate', time: '10:00' },
    { downloadId: 'strawberry', time: '20:00' },
    { downloadId: 'vanilla', time: '30:00' },
    { downloadId: 'dsffs', time: '30:00' },
    { downloadId: 'gfdgd', time: '30:00' },
    { downloadId: 'sdfdsf', time: '30:00' },
    { downloadId: 'sdvsdv', time: '30:00' },
    { downloadId: 'nhgnghf', time: '30:00' },
    { downloadId: 'gsfg', time: '30:00' },
    { downloadId: 'vanfdfdilla', time: '30:00' },
    { downloadId: 'nfn', time: '30:00' },
    { downloadId: 'vanidfglla', time: '30:00' },
    { downloadId: 'vanfbvdfilla', time: '30:00' }
  ];

  const satelliteData = {
    satelliteName: 'Satellite A',
    averageTime: '2.5 seconds',
    limitTime: '3 seconds',
    productsCount: 100,
    onTimeProducts: 80,
    lateProducts: 20,
    cep90: '3.2 seconds',
    productsInProgress: '10',
    metadataProblems: 5
  };

  return (
    <>
      <CostumeSelect options={options}/>
      <TotalCircleGraph/>
      <SatelliteCircleGraph/>
      <RealTimeExceptions downloads={downloads}/>
      <SatelliteProfile satelliteData={satelliteData}/>
    </>
  )
}

export default App
