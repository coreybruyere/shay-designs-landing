import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `Shay Designs`,
        `Jewelry`,
        `Handmade`,
        `Personalize`,
        `Girly-Chic`,
        `Shay Designs Personalized Jewelry`,
      ]}
    />
    <h1>Shay Designs has completely moved to Etsy!</h1>
    <p>Please visit our Etsy shop below.</p>

    <h2>Top Collections</h2>
    <ul>
      <li>List items here</li>
    </ul>

    <footer>
      <ul>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>
    </footer>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
