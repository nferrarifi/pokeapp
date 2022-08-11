import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'


const SearchBar = () => {
const [query, setQuery] = useState()
const handleChange = (event) => setQuery(event.target.value)
  return (
    <>
    <Box width={"50%"} margin="auto" marginTop={"10px"} >
    <Input value={query}
           onChange={handleChange}
           name='searchQuery' 
           placeholder='Search a specific Pokemon' 
           color={"White"}>
    </Input>
    </Box>
    <Box mb='8px'>SearchQuery: {query}</Box>
    
    </>
  )
}

export default SearchBar