
import PropTypes  from 'prop-types';
import React, { useState } from 'react';



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        const {value} = target;
        setInputValue(value)
    }

    const onSubmit = (e) =>{
        e.preventDefault(); 
        const newInputValue = inputValue.trim();

        if (newInputValue.length <= 1) return;

        onNewCategory(newInputValue);
        setInputValue('');
    }

    
    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input 
                type='text'
                placeholder='Buscar Gif'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
