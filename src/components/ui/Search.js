import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText]=useState('')
    const onChange=(ask)=>{
        setText(ask)
        getQuery(ask)
    }
    return (
        <section className="search">
            <form>
                <input type="text" 
                className="form-control" 
                placeholder="Search"
                value={text}
                onChange={(e)=>onChange(e.target.value)}
                autoFocus/>
            </form>
            
        </section>
    )
}

export default Search
