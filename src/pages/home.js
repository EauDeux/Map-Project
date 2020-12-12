import React, { useState } from 'react'
// import { useTranslation } from 'react-i18next'
import ReactTooltip from 'react-tooltip'
import './home.css'
import MapChart from '../components/mapChart/index.js'

const Home = () => {
  const [content, setContent] = useState('')

  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  )
}

export default Home
