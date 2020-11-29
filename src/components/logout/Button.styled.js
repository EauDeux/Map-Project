import styled from 'styled-components'

export const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.main};
  color: ${props => props.theme.main};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`
