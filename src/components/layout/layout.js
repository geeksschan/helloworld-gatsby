import React from "react"

import Header from "./header";

import styles from "./layout.module.scss";

export default ({ children }) => {
    return (
        <div className={styles.wrap}>
            <Header />
            { children }
        </div>
    )
}
