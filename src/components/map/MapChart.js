import React, { memo, useState, useEffect } from 'react'
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps'
import PropTypes from 'prop-types'
import { store } from '../../config/store'
import MapJson from '../../assets/map/jsonGeo'

const geoUrl = MapJson

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
        <ZoomableGroup>
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
                      )} — ${DEVISE_FR} — ${DEVISE_MON} `
                    )
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('')
                  }}
                  onClick={() => {
                    const { NAME, PLUS, MOINS } = geo.properties
                    setTooltipContent(`${NAME} — ${PLUS} — ${MOINS}`)
                  }}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none'
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none'
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  )
}

MapChart.propTypes = {
  setTooltipContent: PropTypes.any
}

export default memo(MapChart)
