import React from 'react'
import Link from 'next/link'




// en produccion los datos se van a convertir en un archivo html
// carga inmediata, es optimo para situaciones rigidas, no dinamicas
export async function getStaticProps(context) {
  const response =   await fetch ("https://jsonplaceholder.typicode.com/posts")
  const data =  await response.json()
//   console.log(data)
  return {
    props: { data}, // will be passed to the page component as props
  }
}



export default function htmlStatic({data}) {


  return (
    <div className='w-full h-screen bg-amber-600'>
        <h2 className='  text-gray-100 text-3xl'>
            En produccion  los datos se van a convertir en html estatico,
            carga inmediata, es optimo para situaciones rigidas, no dinamicas
        </h2>
            <h1 className=' text-gray-100 text-5xl'> 
                Datos de la api: 
            </h1>
        <h1  className=' flex text-4xl text-gray-100'>
            {data[0].title}
        </h1>

        <div className=" border-4 w-20  bg-white">
        <Link   href="/">ATRAS</Link>
        </div>
    </div>
  )
}
