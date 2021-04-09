import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addHero} from '../../actions'

const AddHero = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [isFavorite, setFavorite] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            alert('Please add a hero')
            return 
        }
        dispatch(addHero({name, isFavorite}))   
        setName('')
        setFavorite(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Hero</label>
                <input type='text'
                    placeholder='Add Hero'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control-check'>
                <label>Set Favorite</label>
                <div className='btn-favorite'>
                    <FontAwesomeIcon icon={isFavorite ? ['fas', 'star'] : ['far', 'star']} style={{ color: '#ffa500' }} onClick={() => setFavorite(!isFavorite)} />
                </div>
            </div>
            <input type='submit' value='Save Hero'
                className='btn btn-block' />
        </form>
    )
}

export default AddHero