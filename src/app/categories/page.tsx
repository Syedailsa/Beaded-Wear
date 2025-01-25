import { client } from "@/sanity/lib/client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60; // Revalidate data every 60 seconds

async function Categories() {
  const query = `*[_type == "category"] | order(name asc){
    _id,
    name,
    id,
    "imageUrl": image.asset->url,
    slug
  }`;

  const categories = await client.fetch(query);

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pb-6">
      <h1 className="font-bold text-3xl lg:text-5xl mb-11 pl-4 md:pl-10">
        Cate
        <span className="text-pink-600">gories</span>
      </h1>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 p-4 mb-12 pt-8">
        {categories.map(
          (category: {
            slug: { current: string };
            _id: string;
            name: string;
            imageUrl: string;
          }) => (
            <div
              key={category._id}
              className="bg-white shadow-md hover:shadow-teal-600 rounded-lg overflow-hidden md:h-auto md:w-auto xl:h-[390px] xl:w-[320px] sm:h-[360px] w-[300px] border border-gray-200 hover:cursor-pointer"
            >
              <Link
                href={`/category/${category.slug.current}`}
                passHref
                className="text-black font-bold "
              >
                <Image
                  width={300}
                  height={250}
                  src={category.imageUrl}
                  alt={category.name}
                  className="sm:w-[300px] md:w-full sm:h-[300px] md:h-[250px] xl:h-[340px] md:object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg">{category.name}</h2>
                </div>
              </Link>
            </div>
          )
        )}
      </main>
    </div>
  );
}

export default Categories;
