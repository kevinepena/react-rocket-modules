import React, { Component } from 'react';
import styles from "./Smoke.module.css";



class Smoke extends Component {
    render() {
        return (
            <div className={styles.smoke}>
                <video className={styles.video} autoPlay loop src='./smoke.mov' />
            </div>
        )
    }
}

export default Smoke;