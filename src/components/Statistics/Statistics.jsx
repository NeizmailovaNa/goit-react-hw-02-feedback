import React from 'react'
import css from './Statistics.module.css'
import PropTypes from 'prop-types'

class Statistics extends React.Component {
    render() {
        return (
            <ul className={css.statistics_block}>
                <li className={css.statistics_items}>Good:</li>
                <li className={css.statistics_items}>Neutral:</li>
                <li className={css.statistics_items}>Bad:</li>
                <li className={css.statistics_items}>Total:</li>
                <li className={css.statistics_items}>Positive feedback:</li>

            </ul>
        )
    }
}

export default Statistics

Statistics.propTypes={
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.range('0..1').isRequired,
}
