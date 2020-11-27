import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import './home.css'

import MapChart from '../components/map/MapChart.js'

const Home = () => {
  const { t } = useTranslation()
  const [content, setContent] = useState('')
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  )
}


export default Home
