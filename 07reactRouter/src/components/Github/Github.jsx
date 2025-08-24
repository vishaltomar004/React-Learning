import React, { useDebugValue, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
const Github = () => {

const data =    useLoaderData();
//     const [data , setData] = useState([]);

//     useEffect(() => {
// fetch('https://api.github.com/users/vishaltomar004')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     setData(data)
// })
//     },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github follwers : 
   
        {data.followers == 0 ? <div> 40000000000</div> : <div>{data.followers} </div> }
    
    <img src= {data.avatar_url} alt='Git Picture' />
    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
  const response =  await fetch('https://api.github.com/users/vishaltomar004')

  return response.json();
}