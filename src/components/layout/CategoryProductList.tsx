import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Loader from "./loader"

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => builder.image(source);

interface Product {
  name: string;
  imageUrl: string;
  price: number;
  slug: {
    current: string;
  };
  category: {
    name: string;
    slug: {
      current: string;
    };
  };
}

const CategoryProductList = ({ slug }: { slug: string }) => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product" && category->slug.current == $slug]{
          name,
          "imageUrl": image.asset->url,
          price,
          category->{
            name,
            slug
          },
          slug {
            current
          }
        }
      `;
      const result = await client.fetch(query, { slug });
      setProducts(result);
    };

    fetchProducts();
  }, [slug]);

  // Loading state
  if (!products) return <Loader />;

  // If no products are found
  if (products.length === 0)
    return <div>No products found for this category.</div>;

  // Render products
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.name}
          className="border p-4 rounded-lg shadow-md bg-white"
        >
          <img
            src={urlFor(product.imageUrl).url()}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.price} PKR</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryProductList;
