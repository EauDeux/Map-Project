import React from 'react'
import { useTranslation } from 'react-i18next'

const Favoris = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('nav.favoris')}</h1>
    </div>
  )
}

export default Favoris
