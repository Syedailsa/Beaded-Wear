"use client";

import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "@/components/layout/loader";

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => builder.image(source);

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"]{
          name,
          "imageUrl": image.asset->url,
          price,
          category->{
            name
          },
          slug {
            current
          }
        }
      `;
      const result = await client.fetch(query);
      // Sort products by category name
      const sortedProducts = result.sort((a: any, b: any) =>
        a.category.name
          .toLowerCase()
          .localeCompare(b.category.name.toLowerCase())
      );
      setProducts(sortedProducts);
    };

    fetchProducts();
  }, []);

  if (!products.length) {
    return <Loader/>;
  }

  const router = useRouter();

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <h1 className="font-bold text-3xl lg:text-5xl ml-3 lg:py-11 ">
        All
        <span className="text-pink-600"> Products</span>
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 place-items-center gap-6 py-8">
        {products.map((product) => (
          <Link
            href={`/products/${product.slug.current}`}
            passHref
            className="text-black font-bold "
          >
            <div
              key={product.slug.current}
              className="border p-4 xl:h-[370px] w-full xl:w-[420px] hover:shadow-teal-600 hover:cursor-pointer rounded shadow hover:shadow-md bg-blue-50"
            >
              {/* Category */}
              <div className="text-sm text-pink-500 font-bold mb-2 inline p-2 rounded-xl bg-[#fac0ff66]">
                {product.category.name}
              </div>

              {/* Image */}

              <img
                src={urlFor(product.imageUrl).url()}
                alt={product.name}
                className="w-full h-48 xl:h-[220px] xl:w-[300px] mx-auto object-cover rounded my-4"
              />

              <div>
                {/* Name */}
                <h2 className="text-lg font-semibold mt-4">{product.name}</h2>

                {/* Price */}
                <p className="text-gray-700 text-lg mt-2">
                  {product.price} PKR
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Products;
