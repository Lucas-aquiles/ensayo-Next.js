import Link from "next/link";







// procesa en el back end
export async function getServerSideProps(context) {
    const response =   await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data =  await response.json()
    console.log(data)
    return {
      props: { data}, // will be passed to the page component as props
    }
  }
  



export default function Firstpart() {


  return (
    <div>
      {/* {JSON.stringify(data)} */}



    </div>
  )
}
