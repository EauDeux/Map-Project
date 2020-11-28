import styled from 'styled-components'

export const StyledNav = styled.nav`
  /* background-color: gold;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: white; */
  display: flex;
  /* flex-direction: column;
  justify-content: center; */
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledLink = styled.a`
  /* text-decoration: none;
  color: white;
  display: block;
  margin-right: 10px; */

  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }
`
