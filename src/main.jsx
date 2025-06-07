import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Userdetail } from './formsamples/Userdetail'
// import './index.css'
import { Qrcode } from './Component/Qrcode.jsx'
// import App from './App.jsx'
// import { Usercard } from './Component/Usercard.jsx'
import './Component/Qrcode.css' 
// import {Cart} from './formsamples/Cart'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Usercard /> */}
    <Qrcode />
   {/* <Cart /> */}
{/* <Userdetail /> */}
  </StrictMode>,
)
