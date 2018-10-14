import React, { Component } from 'react';
import styles from "./Rocket.module.css";

class Rocket extends Component {
    render() {
        return(
            <div>
                <img src="./shuttle.png" alt="Shuttle" className={styles.img} />
            </div>
        )
    }
}

export default Rocket;