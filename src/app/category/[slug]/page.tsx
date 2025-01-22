import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import React from "react";
import Link from "next/link";

// Initialize image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source).url(); // Get the actual image URL

interface Product {
  _id: string;
  name: string;
  image: any; // This will be the image object
  price: number;
  slug: { current: string };
}

interface Category {
  name: string;
}

async function CategoryProducts({ params }: { params: { slug: string } }) {
  // Fetch category details
  const categoryQuery = `*[_type == "category" && slug.current == $slug][0]{
    name
  }`;
  const category: Category | null = await client.fetch(categoryQuery, {
    slug: params.slug,
  });

  // Handle case where category is not found
  if (!category) {
    notFound();
  }

  // Fetch products data for the specific category
  const productQuery = `*[_type == "product" && category->slug.current == $slug]{
    _id,
    name,
    image {
      asset->{
        url
      }
    },
    price,
    slug {
      current
    }
  }`;

  const products: Product[] = await client.fetch(productQuery, {
    slug: params.slug,
  });

  // Handle case where no products are found
  if (!products || products.length === 0) {
    notFound();
  }

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pb-6">
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mt-5 mb-12 ">
          Products in <span className="text-pink-600">{category.name}</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-teal-600"
            >
              {/* Product Image */}
              <Link
                href={`/products/${product.slug.current}`}
                passHref
                className="text-black font-bold "
              >
                <img
                  src={urlFor(product.image)}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
              
              <div className="p-4">
                {/* Product Name */}
                <h2 className="text-lg font-semibold">{product.name}</h2>

                {/* Product Price */}
                <p className="text-gray-600 mt-2">{product.price} PKR</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CategoryProducts;
