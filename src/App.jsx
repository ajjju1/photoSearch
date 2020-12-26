import React,{useState} from 'react'
import 'regenerator-runtime/runtime'
import Gallery from './components/Gallery'
import SearchBox from './components/SearchBox'

const App = () => {
    const [input, setInput] = useState('')
    return (
        <center>
            <h1>Welcome to the PhotoSearch</h1>
            <SearchBox input={input} setInput = {setInput}/>
            <Gallery query={input}/>
        </center>
    )
}

export default App
