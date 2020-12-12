import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { StyledH1, StyledCard, StyledSection, StyledButton } from './Fav.styled'

const Fav = () => {
  const { t } = useTranslation()
  const [fav, setFav] = useState([])
  useEffect(() => {
    setFav(
      localStorage.getItem('favorite')
        ? JSON.parse(localStorage.getItem('favorite'))
        : []
    )
  })
  const Delete = () => {
    const currentFavorite = localStorage.getItem('favorite')
    JSON.parse(
      localStorage.removeItem('favorite', JSON.stringify(currentFavorite))
    )
  }
  return (
    <div>
      <StyledH1>{t('nav.favoris')}</StyledH1>
      <StyledSection>
        {fav.map(f => {
          return (
            <StyledCard key={f.name}>
              <p>
                {f.name} {f.content}{' '}
              </p>
              <StyledButton
                theme={{ main: 'red' }}
                onClick={Delete}
                // onClick={() => {
                //   JSON.parse(localStorage.removeItem('currentFavorite', ' '))
                // }}
              >
                Supprimer
              </StyledButton>
            </StyledCard>
          )
        })}
      </StyledSection>
    </div>
  )
}

export default Fav
