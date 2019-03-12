import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const MainGrid = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 94vh;
  text-align: center;
  padding: 0 1rem;

  * {
    font-size: 130%;
  }

  h1 {
    font-family: "Martel";
    font-size: 3rem;
    color: #5f8bab;
  }

  a {
    color: #346386;
  }
`

const Main = ({ children, title }) => (
  <MainGrid>
    <h1>{title}</h1>
    {children}
  </MainGrid>
)

Main.propTypes = {
  siteTitle: PropTypes.string,
}

Main.defaultProps = {
  siteTitle: ``,
}

export default Main
