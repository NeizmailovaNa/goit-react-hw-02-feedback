import React from 'react'
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'

class FeedbackOptions extends React.Component {
    render() {
        return (
            <div className={css.buttons_wrapper}>
                <button type='button' className={css.buttons}>Good</button>
                <button type='button' className={css.buttons}>Neutral</button>
                <button type='button' className={css.buttons}>Bad</button>
            </div>
        )
    }
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
}