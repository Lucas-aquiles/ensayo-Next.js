import Link from 'next/link'


// procesa en el back end
export async function getServerSideProps(context) {
    const response =   await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data =  await response.json()
    // console.log(data)
    return {
      props: { data}, // will be passed to the page component as props
    }
  }
  


export default function backOne({data}) {
    
  return (
    <div className="w-full bg-cyan-500 h-screen p-10">
        <p> 
            SE LE HACE UNA PETICION AL BACK Q NUNCA VA TENER CONTACTO CON EL FRONT END.
            SE GENERA HTML EN CADA PETICION
        </p>
        <p>Informacion que trae de la peticion :</p>
        {/* {JSON.stringify(data)} */}
        <h1 className="w-full text-stone-300 font-bold 	text-8xl		"> {data[0].title} </h1>
        <div className=" border-4 w-20  bg-white">

        <Link   href="/">ATRAS</Link>
        </div>
    </div>
  )
}
