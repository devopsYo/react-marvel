import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, statusAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {
                showAdd &&
                <Button color={statusAdd ? 'red' : 'green'} text={statusAdd ? 'Close' : 'Add'} />
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Marvel Heroes'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}



export default Header
