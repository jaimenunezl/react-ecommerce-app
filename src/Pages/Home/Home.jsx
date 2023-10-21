import { useContext, useState } from 'react';
import {
  Layout,
  Card,
  ProductDetail,
  CheckoutSideMenu,
} from '../../Components';
import { StoreContext } from '../../Context';
import { useParams } from 'react-router-dom';

function Home() {
  const { products } = useContext(StoreContext);
  const [search, setSearch] = useState('');

  const { category: categoryParam = '' } = useParams();

  const productsFiltered = products
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
    .filter(
      ({ title, category }) =>
        title.toLowerCase().includes(search.toLowerCase()) &&
        category.toLowerCase().includes(categoryParam.toLowerCase())
    );

  return (
    <Layout>
      <header className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Shopi Store</h1>
        <input
          className="w-full border p-3 rounded-md mt-4 focus:scale-x-110 transition-transform"
          type="search"
          placeholder="Smartphone"
          onChange={(event) => setSearch(event.target.value)}
        />
      </header>

      <main className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
        {productsFiltered.length > 0 ? (
          productsFiltered.map((data) => <Card key={data.id} data={data} />)
        ) : (
          <p className="w-full text-center">No se encontraron productos</p>
        )}
      </main>

      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;
