import React from "react"
import Layout from "../components/Layout"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import PromotionsList from "../components/PromotionsList"

const Promotions = () => {
  const data = useStaticQuery(query)
  const promos = data.allStrapiPromos.nodes
  return (
    <Layout>
      <Container>
        <Title>
          <h1>Promotions</h1>
        </Title>
        <PromotionsList promos={promos} />
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  padding: 1rem;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000080;
`

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
