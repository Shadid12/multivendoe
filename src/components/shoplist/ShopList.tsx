import Link from "next/link"
import { Shop } from "../../types"

export default function ShopList({ shops} : { shops: Shop[] }) {

  return (
    
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {
        shops.map(shop => (
          <Link href={`/shops/${shop._id}`} key={shop._id}>
            <div className="group cursor-pointer">
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75">
                <img src={`${shop.image}`} 
                className="w-full h-full object-cover lg:w-full lg:h-full" />
              </div>
              <div className="mt-4 flex-col">
                <h3 className="text-sm text-gray-700">{shop.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{shop.category}</p>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}