import React, { Fragment } from "react"

const ProductsList = ({ products }) => {
  return (
    <section className="items-list">
      {products.map(product => {
        const { id, name, price, sku, category, description, imageLink } =
          product
        return (
          <Fragment key={id}>
            <div className="item">
              <h2>{name}</h2>
              <img src={imageLink} alt={name} width="250px" height="auto" />
              <p className="price">${parseFloat(price).toFixed(2)}</p>
              {category}
              <br />
              {/* {description}
              <br />
              {sku} */}
              <button>Add to cart</button>
            </div>
          </Fragment>
        )
      })}
    </section>
  )
}

export default ProductsList
