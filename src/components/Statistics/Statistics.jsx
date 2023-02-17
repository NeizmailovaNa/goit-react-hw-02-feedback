import css from './Statistics.module.css'
import PropTypes from 'prop-types'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (

        <ul className={css.statistics_block}>
            <li className={css.statistics_items}>Good:{good}</li>
            <li className={css.statistics_items}>Neutral:{neutral}</li>
            <li className={css.statistics_items}>Bad:{bad}</li>
            <li className={css.statistics_items}>Total:{total}</li>
            <li className={css.statistics_items}>Positive feedback:{positivePercentage}</li>

        </ul>
    )
}

Statistics.propTypes={
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.range('0..1').isRequired,
}
