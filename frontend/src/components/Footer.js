import React from "react"
import { AiFillGithub } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2021 - Acmedent Clone.</p>
      <p>
        All logos, images, products gathered from{" "}
        <a
          href="https://acmedent.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acmedent
        </a>
        . Created by Ralph Arvin De Castro for demonstration purposes only.{" "}
        <a
          href="https://github.com/imralpharvin/dental-supply-store"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Github <AiFillGithub />
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
