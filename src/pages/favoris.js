import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Favoris = () => {
  const { t } = useTranslation()
  const [fav, setFav] = useState([])
  useEffect(() => {
    setFav(
      localStorage.getItem('favorite')
        ? JSON.parse(localStorage.getItem('favorite'))
        : []
    )
  })
  return (
    <div>
      <h1>{t('nav.favoris')}</h1>
      {fav.map(f => {
        return (
          <p key={f.name}>
            {f.name} {f.content}{' '}
          </p>
        )
      })}
    </div>
  )
}

export default Favoris
