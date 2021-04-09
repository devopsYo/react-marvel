import {updateStatusAdd} from '../../actions'
import {useDispatch} from 'react-redux'

const Button = ({color, text}) => {
    const dispatch = useDispatch()
    return (
        <button 
           onClick={()=> dispatch(updateStatusAdd())}
           style={{backgroundColor: color}}
           className = 'btn'>{text}
         </button>
    )
}

export default Button

