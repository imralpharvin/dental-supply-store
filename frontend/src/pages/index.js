import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import PromotionsList from "../components/PromotionsList"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="home-header">
          <StaticImage
            src="../assets/images/shipping.jpg"
            alt="Dental supply store"
            placeholder="tracedSVG"
            layout="fullWidth"
            className="home-header-image"
          />
          <div className="home-header-text">
            <h1>ACMEDENTclone</h1>
            <h4>Distributors of Dental Supplies and Equipment</h4>
          </div>
        </header>

        <PromotionsList />
      </main>
    </Layout>
  )
}
