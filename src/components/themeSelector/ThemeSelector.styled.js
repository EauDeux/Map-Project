import styled from 'styled-components'

export const StyledButton = styled.button`
  color: ${props => props.theme.text};
  /* ${props => props.theme.main} */
  background-color: ${props => props.theme.primary};
  box-shadow: none;
  border: 0px;
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  margin: 12px;
`
