import styled from 'styled-components'

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.text});
  margin-top: 5px;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 25px;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #9e9e9e;
  width: 40%;
  padding: 5%;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15%;
`

export const SigninInput = styled.input`
  border-radius: initial;
  border: none;
  border-bottom: solid 2px #363537;
  background-color: #9E9E9E;
  width: 100%;
  padding-top: 10%;
  padding-bottom: 5%;
  color: ${({ theme }) => theme.text});
`
