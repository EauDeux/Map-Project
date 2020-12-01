import React from 'react'
import { useTranslation } from 'react-i18next'

const Favorite = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('nav.favorite')}</h1>
    </div>
  )
}

export default Favorite
