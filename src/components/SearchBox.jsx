import React,{ useState } from 'react'
import { DebounceInput } from 'react-debounce-input'

const SearchBox = ({input, setInput}) => {
    return (
        <DebounceInput 
        minLength={3} 
        debounceTimeout={300} 
        type="text" 
        name ="Photo Search" 
        placeholder="Search for photos"
        className="searchBox" 
        value={input} 
        onChange={ (event) => setInput(event.target.value)}/>
    )
}

export default SearchBox
