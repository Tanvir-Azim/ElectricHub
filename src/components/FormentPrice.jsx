import React from 'react'

function FormentPrice({price}) {
   
  return Intl.NumberFormat('bd-BD',{
        style:'currency',
        //currency:'INR',
        currency:'BDT',
        maximamFractionDigits:2,
    }).format(price/100)
  
}

export default FormentPrice