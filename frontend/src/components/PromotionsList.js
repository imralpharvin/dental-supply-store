import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

const PromotionsList = () => {
  const data = useStaticQuery(query)
  const promos = data.allStrapiPromos.nodes
  return (
    <section className="items-list">
      {promos.map(promo => {
        const { id, Title, PdfLink, ImageLink } = promo

        return (
          <Fragment key={id}>
            <div className="item">
              <img
                src={ImageLink}
                alt={Title}
                style={{ width: "300px", height: "auto" }}
              />
              <a href={PdfLink} target="_blank" rel="noopener noreferrer">
                <button>View Promotions</button>
              </a>
            </div>
          </Fragment>
        )
      })}
    </section>
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

export default PromotionsList
