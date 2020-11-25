import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ReactTooltip from 'react-tooltip'
import './home.css'

import MapChart from '../components/MapChart.js'

function Home() {
  const [content, setContent] = useState('')
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<Home />, rootElement)
export default Home