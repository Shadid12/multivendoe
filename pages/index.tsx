import type { NextPage } from 'next'
import { useQuery } from 'urql';
import ShopList from '../src/components/shoplist/ShopList';

export const QueryShops = `
  query AllShops {
    shops {
      data {
        image
        _id
        name
        category
      }
    }
  }
`

const Home: NextPage = () => {
  const [{fetching, data, error}, reexecuteQuery] = useQuery({
    query: QueryShops
  });

  if(fetching) return <p>Loading...</p>

  if(error) return <p>Error: {error.message}</p>

  return (
    <div className="container px-6 py-4">

      <ShopList shops={data.shops.data}/>
    </div>
  )
}

export default Home
