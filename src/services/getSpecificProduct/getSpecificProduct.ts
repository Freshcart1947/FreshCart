export async function getSpecificProduct(id:String){
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/${id}`,{
        next:{
            revalidate:10
        }
    })
    const data = await response.json()
    return data
}