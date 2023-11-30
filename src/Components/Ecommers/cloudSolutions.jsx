import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const cloudSolution = () => {
    const [data , setData]=useState('')
    console.log(data)
    const fetchData=async()=>{
        try {
            const response=await axios.get('http://localhost:1337/api/cloud-solutions?populate=*')
            setData(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <div> Hii</div>
    )
    }

    export default cloudSolution;