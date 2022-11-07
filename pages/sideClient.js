import { data } from 'autoprefixer'
import React ,{useEffect,useState}from 'react'
import Link from 'next/link'

export default function sideClient() {

const [state, setState]= useState()

    useEffect(() => {
         traerData()
   
    }, [])
    
    async function traerData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data =  await  response.json()
        setState(data)

    }

  return (
    <div className=' bg-zinc-500 w-full h-full'>
         <h3 className=' text-gray-200 text-4xl'>ME TRAE LA DATA COMO LO HACE REACT DEL LADO DEL CLIENT </h3>
        <h3 className=' text-gray-200 text-4xl'>Esta informacion me traeeeeeee:</h3>
    <h2 className='text-4xl  text-gray-200'>{state&& state[0].title}</h2> 

    <div className=" border-4 w-20  bg-white">

    <Link   href="/">ATRAS</Link>
    </div>

    </div>
   
  )
}
