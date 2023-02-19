import React from 'react'
import './FeedbackOptions.module.css'
import PropTypes from 'prop-types'

class FeedbackOptions extends React.Component {
    render() {
        return (
            <div className="buttons_wrapper">
                <button type='button' className="buttons">Good</button>
                <button type='button' className="buttons">Neutral</button>
                <button type='button' className="buttons">Bad</button>
            </div>
        )
    }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
}