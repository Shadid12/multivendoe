import { useRouter } from "next/router"
import { useQuery } from "urql";
import ProductList from "../../../src/components/productlist/ProductList";


export const GetShopbyID = `
  query GetShopbyID($id: ID!) {
    findShopByID(id: $id) {
      _id
      products {
        data {
          _id
          image
          name
          price
        }
      }
    }
  }
`

export default function Shop() {
  const router = useRouter()

  const [{fetching, data, error}, reexecuteQuery] = useQuery({
    query: GetShopbyID,
    variables: { id: router.query.id },
  });

  if(fetching) return <p>Loading...</p>

  if(error) return <p>Error: {error.message} </p>

  console.log(data)

  return (
    <div className="container px-6 py-4">
      <h1>Products</h1>
      <ProductList products={data.findShopByID?.products?.data}/>
    </div>
  )
}