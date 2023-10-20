import { useEffect, useState } from 'react';
import {
  Layout,
  Card,
  ProductDetail,
  CheckoutSideMenu,
} from '../../Components';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products
          .map((data) => {
            const { id, images, title, description, price, category } = data;

            return {
              id,
              image: images[0],
              title,
              description,
              price,
              category: category.name,
            };
          })
          .map((data) => (
            <Card key={data.id} data={data} />
          ))}
      </div>

      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;
