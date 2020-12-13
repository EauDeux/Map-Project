import React from 'react'
import { ReactComponent as FlagFR } from '../../assets/svg/flagFR.svg'
import { ReactComponent as FlagUK } from '../../assets/svg/flagUK.svg'

import { StyledButton } from './Lang.styled'

// import { useTranslation } from 'react-i18next'
import i18n from '../../config/translations'

const Lang = () => {
  return (
    <>
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
