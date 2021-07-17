import React from "react"
import Layout from "../components/Layout"

import PromotionsList from "../components/PromotionsList"

const Promotions = () => {
  return (
    <Layout>
      <main className="page">
        <h1>Promotions</h1>
        <PromotionsList />
      </main>
    </Layout>
  )
}

export default Promotions
