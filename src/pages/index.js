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
    <p style={{ maxWidth: "620px", margin: "0 auto", lineHeight: 1.5 }}>
      Please visit the{" "}
      <a href="https://www.etsy.com/shop/ShayDesignsJewelry">Etsy store</a> for
      all the same girly-chic, personalized jewelry that was once here!
    </p>

    {/* <h2>Top Collections</h2>
    <ul>
      <li>List items here</li>
    </ul> */}

    {/* <footer>
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
    </div> */}
  </Layout>
)

export default IndexPage
