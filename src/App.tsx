
import '@mantine/core/styles.css';
import './App.css'
import './components/Yeardata.js';
import Yeardata from './components/Yeardata.tsx';

import { MantineProvider } from '@mantine/core';
import Cropdata from './components/Cropdata.tsx';

export default function App() {
  return <MantineProvider>{
    <>
    <div className='bodywarp'>
      
        <div className='heading'>
            Manufac App
          </div>
          <div className='content'>
                <Yeardata/>
                <Cropdata/>
          </div>
      
        
    </div>
    </>
  }</MantineProvider>;
}




