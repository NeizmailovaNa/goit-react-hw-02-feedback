import css from './Feedback_options.module.css'
import PropTypes from 'prop-types'

export const FFF = ({good, neutral, bad}) => {
    return (
        <div className={css.buttons_wrapper}>
            <button className={css.buttons}></button>
            <button className={css.buttons}></button>
            <button className={css.buttons}></button>
        </div>
    )
}

FFF.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
}