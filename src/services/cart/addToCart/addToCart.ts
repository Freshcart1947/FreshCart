'use server'


export async function addToCart(productId:string){
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`,{
        method:"POST",
        body:JSON.stringify({productId}),
        headers:{
            token:'',
            'Content-type':'application/json'
        }
    })
}