import React, { Fragment } from "react"
import { FaShoppingCart } from "react-icons/fa"

const ProductsList = ({ products }) => {
  return (
    <section className="products-list">
      {products.map(product => {
        const { id, name, price, sku, category, description, imageLink } =
          product
        return (
          <Fragment key={id}>
            <div className="product">
              <img src={imageLink} alt={name} />

              <div className="product-info">
                <div className="product-info-header">
                  <h2>{name}</h2>
                  <p>{category}</p>
                </div>
                <div className="product-info-price">
                  <p className="price"> ${parseFloat(price).toFixed(2)}</p>

                  {/* {description}
              <br />
            {sku} */}
                  <button>
                    <FaShoppingCart style={{ marginRight: ".5rem" }} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </Fragment>
        )
      })}
    </section>
  )
}

export default ProductsList
