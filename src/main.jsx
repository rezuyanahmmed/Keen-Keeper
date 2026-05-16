// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// InteractionProvider কে ইমপোর্ট করা হলো (পাথটি চেক করে নিও)
import { InteractionProvider } from './context/InteractionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InteractionProvider>
      <App />
    </InteractionProvider>
  </StrictMode>,
)