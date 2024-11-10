import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Productcontax.jsx'
import { FilterContaxProvider } from './components/FilterContax.jsx'
import { CardProvider } from './components/Card_Contax.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <AppProvider>
      <FilterContaxProvider>
        <CardProvider>
            <App/>
        </CardProvider>
      </FilterContaxProvider>
    </AppProvider>
  ,
)
