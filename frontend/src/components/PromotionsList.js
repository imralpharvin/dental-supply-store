import React, { Fragment } from "react"
import styled from "styled-components"

const PromotionsList = ({ promos }) => {
  return (
    <StyledContainer>
      {promos.map(promo => {
        const { id, Title, PdfLink, ImageLink } = promo

        return (
          <Fragment key={id}>
            <a href={PdfLink} target="_blank" rel="noopener noreferrer">
              <img
                src={ImageLink}
                alt={Title}
                style={{ width: "200px", height: "200px" }}
              />
            </a>
          </Fragment>
        )
      })}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  align: center;
  text-align: center;
`

export default PromotionsList
