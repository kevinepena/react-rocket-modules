import React, { Component } from 'react';
import GridItem from "./GridItem"
import styles from "./Grid.module.css";
import mediaStyles from "./Media.module.css";
import cx from 'classnames';



class Grid extends Component {

    constructor(props) {
        super(props);
        this.updateClicked = this.updateClicked.bind(this);
    }

    updateClicked(id) {
        this.props.updateClicked(id);
    }

    render() {

        console.log(this.props.facts)
        return (
            <section className={cx(styles.grid, mediaStyles.grid)}>

                {this.props.facts.map(item =>
                    <GridItem
                        key={item.id}
                        fact={item}
                        updateClicked={this.updateClicked}
                    />
                )}

            </section>
        )
    }
}

export default Grid;