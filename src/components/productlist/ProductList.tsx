import { Product } from "../../types"

export default function ProductList({ products} : { products: Product[] }) {

  const addToCart = (product: Product) => {
    console.log('add to cart', product)
  }

  return (
    
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {
        products?.map(product => (
          <div key={product._id}>
            <div className="group">
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
                <img src={`${product.image}`} 
                className="w-full h-full object-cover lg:w-full lg:h-full" />
              </div>
              <div className="mt-4 flex-col">
                <h3 className="text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                <button 
                  className="px-4 py-3 border shadow-lg text-xs rounded hover:bg-gray-50"
                  onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}