import { useEffect, useState } from 'react'
import { Layout, Card, ProductDetail } from '../../Components'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products
          .map(({ id, images, title, description, price, category }) => {
            return {
              id,
              image: images[0],
              title,
              description,
              price,
              category: category.name,
            }
          })
          .map(({ id, image, title, description, price, category }) => (
            <Card
              key={id}
              id={id}
              image={image}
              title={title}
              description={description}
              category={category}
              price={price}
            />
          ))}
      </div>

      <ProductDetail />
    </Layout>
  )
}

export default Home
