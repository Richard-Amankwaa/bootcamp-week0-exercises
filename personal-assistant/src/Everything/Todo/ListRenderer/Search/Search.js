import {Container} from './styles'
import React from 'react'



const Search = ({setQuery}) => {
    return <Container>
        <input type="text" placeholder="Search..." onChange={e => 
            setQuery(e.target.value)
        }
    />
        </Container>
}

export default Search