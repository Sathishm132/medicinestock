import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Addstock from './components/Addstock';
import Bill from './components/Bill';
import Stockprovider from './Context/Stockprovider';



function App() {

  return (
    <div>
      <Stockprovider> <Addstock/><br/>
      <Bill/></Stockprovider>
    
    </div>
  );
}

export default App;
