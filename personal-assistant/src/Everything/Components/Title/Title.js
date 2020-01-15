import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {TitleLabel} from "./styles.js"

const Title = () => {
    const [title, setTitle] = useState("Home")
    const location = useLocation()
    useEffect(() => {
    if (location.pathname === "/"){
        setTitle("Home")
    }else if(location.pathname === "/todo"){
        setTitle("To-do List")
    }else{
        setTitle("Todo")
    }}, [location])

    return <TitleLabel>{title}</TitleLabel>
}

export default Title