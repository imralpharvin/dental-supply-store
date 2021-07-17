import React, { Fragment } from "react"

const PromotionsList = ({ promos }) => {
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

export default PromotionsList
