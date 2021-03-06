import React, { memo, useState, useEffect } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import PropTypes from 'prop-types'
import { store } from '../../config/store'
import MapJson from '../../assets/json/jsonGeo.json'

const geoUrl = MapJson

const handleFavorite = country => {
  console.log('handleFavorite -> country', country)
  const currentFavorite = localStorage.getItem('favorite')
    ? JSON.parse(localStorage.getItem('favorite'))
    : []
  currentFavorite.push(country)
  localStorage.setItem('favorite', JSON.stringify(currentFavorite))
}

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + 'Bn'
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + 'M'
  } else {
    return Math.round(num / 100) / 10 + 'K'
  }
}

const MapChart = ({ setTooltipContent }) => {
  const popup = store.getState().popup.popup
  const [currentPopup, setPopup] = useState({
    setTooltipContent: ''
  })
  useEffect(() => {
    setPopup(popup)
  }, [popup])
  return (
    <>
      <ComposableMap data-tip='' projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl} popup={currentPopup}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const {
                    NAME,
                    POP_EST,
                    DEVISE_FR,
                    DEVISE_MON
                  } = geo.properties
                  setTooltipContent(
                    `${NAME} — ${rounded(
                      POP_EST
                    )} — ${DEVISE_FR} — ${DEVISE_MON}`
                  )
                }}
                onMouseLeave={() => {
                  setTooltipContent('')
                }}
                onClick={() => {
                  const { NAME, PLUS, MOINS } = geo.properties
                  setTooltipContent(`${NAME} — ${PLUS} — ${MOINS}`)
                }}
                onDoubleClick={() => {
                  const {
                    NAME,
                    POP_EST,
                    DEVISE_FR,
                    DEVISE_MON,
                    PLUS,
                    MOINS
                  } = geo.properties
                  handleFavorite({
                    name: NAME,
                    content: `${NAME} — ${rounded(
                      POP_EST
                    )} — ${DEVISE_FR} — ${DEVISE_MON} - ${PLUS} - ${MOINS}`
                  })
                }}
                style={{
                  default: {
                    fill: 'darkgrey',
                    outline: 'none'
                  },
                  hover: {
                    fill: 'lightgrey',
                    outline: 'none'
                  },
                  pressed: {
                    fill: 'grey',
                    outline: 'none'
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  )
}

MapChart.propTypes = {
  setTooltipContent: PropTypes.any
}

export default memo(MapChart)
