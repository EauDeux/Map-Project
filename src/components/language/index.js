import React from 'react'

// import { useTranslation } from 'react-i18next'
import i18n from '../../config/translations'

const Language = () => {
  // const { t, i18n } = useTranslation()
  // const isLanguage = () => {
  //   if (i18n.lng === 'fr') {
  //     i18n.changeLanguage('en')
  //     return
  //   }

  //   i18n.changeLanguage('fr')
  // }

  return (
    <>
      {/* {i18n.lng === 'fr' ? (
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      ) : (
        <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
      )} */}
      <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </>
  )
}

export default Language
