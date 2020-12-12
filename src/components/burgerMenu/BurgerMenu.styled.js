import styled from 'styled-components'

export const StyledBurgerMenu = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`

export const StyledDivOne = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${({ theme, open }) => (open ? theme.primary : theme.text)};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
`

export const StyledDivTwo = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${({ theme, open }) => (open ? theme.primary : theme.text)};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  opacity: ${({ open }) => (open ? '0' : '1')};
  transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
`

export const StyledDivThree = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: ${({ theme, open }) => (open ? theme.primary : theme.text)};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
`
