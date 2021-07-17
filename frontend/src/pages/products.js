import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import ProductsList from "../components/ProductsList"

const Products = () => {
  const data = useStaticQuery(query)
  const products = data.allStrapiProducts.nodes
  return (
    <Layout>
      <main className="page">
        <h1>Products</h1>
        <ProductsList products={products} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProducts {
      nodes {
        price
        sku
        category
        description
        id
        imageLink
        name
      }
    }
  }
`

export default Products
