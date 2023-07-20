import React from "react"
import styles from "./styles.module.scss"

function SearchGoogle() {
  return (
    <div className="App">
      <body>
        <div className={styles.main}>
          <div className={styles.google}>
            <iframe src="https://www.google.com/search?igu=1" frameBorder="0" className={styles.iframe}></iframe>
          </div>
        </div>
      </body>
    </div>
  )
}

export default SearchGoogle
