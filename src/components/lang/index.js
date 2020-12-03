import React from 'react'
import { ReactComponent as FlagFR } from '../../assets/svg/flagFR.svg'
import { ReactComponent as FlagUK } from '../../assets/svg/flagUK.svg'

import { StyledButton } from './Lang.styled'

// import { useTranslation } from 'react-i18next'
import i18n from '../../config/translations'

const Lang = () => {
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
      <StyledButton onClick={() => i18n.changeLanguage('fr')}>
        <FlagFR />
      </StyledButton>
      <StyledButton onClick={() => i18n.changeLanguage('en')}>
        <FlagUK />
      </StyledButton>
    </>
  )
}

export default Lang
