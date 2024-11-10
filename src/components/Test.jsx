import React from 'react'
import { useFilterContax } from '../components/FilterContax'

function Test() {

    const{test}=useFilterContax()
        console.log(test)
  return (
    <div>Test</div>
  )
}

export default Test