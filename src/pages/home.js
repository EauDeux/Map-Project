<<<<<<< HEAD
import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('nav.home')}</h1>
    </div>
  )
}

export default Home
=======
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ReactTooltip from 'react-tooltip'
import './home.css'

import MapChart from '../components/map/MapChart.js'

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
>>>>>>> aminata
