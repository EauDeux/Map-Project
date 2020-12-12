import styled from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

export const StyledCard = styled.article`
  background-color: ${({ theme }) => theme.primaryLight};
  border-radius: 20px;
  width: 40%;
  padding: 20px;
  margin-top: 5%;
  margin-left: 10px;
  margin-right: 10px;
`

export const StyledH1 = styled.h1`
  text-align: center;
  margin-top: 3%;
`

export const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.main};
  color: ${props => props.theme.main};
  margin: 1em 16em;
  padding: 0.25em 1em;
`
