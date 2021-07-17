import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import PromotionsList from "../components/PromotionsList"

const Promotions = () => {
  const data = useStaticQuery(query)
  const promos = data.allStrapiPromos.nodes
  return (
    <Layout>
      <main className="page">
        <h1>Promotions</h1>
        <PromotionsList promos={promos} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiPromos {
      nodes {
        ImageLink
        PdfLink
        Title
      }
    }
  }
`

export default Promotions
