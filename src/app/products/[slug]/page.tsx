"use client";

import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
import Loader from "@/components/layout/loader";

// Initialize image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

interface Product {
  category: string;
  _id: string;
  name: string;
  imageUrl: any; // This will be the image object
  price: number;
}

function Product({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [index, setIndex] = useState(0);
  const { cartItems, addProduct, qty, decQty, incQty }: any =
    useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.slug}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const fetchedProduct: Product = await response.json();
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [params.slug]);
  
  // Handle loading state
  if (loading) {
    <Loader />;
  }

  // Handle product not found
  if (!product) {
    return null;
  }

  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto place-content-center justify-center md:py-32 px-4">
        {/* Left */}
        <div className="md:ml-5">
          {/* TOP */}
          <div className="flex">
            <Image
              src={urlFor(product.imageUrl).url()}
              alt={product.name[index]}
              width={350}
              height={350}
              className="object-cover mx-auto"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 md:mb-5">
            <div className="text-3xl font-bold">{product.name}</div>
            <div className="text-xl font-medium">{product.price} PKR</div>
          </div>

          <div className="flex gap-2 items-center">
            <h3>Quantity</h3>
            <p className="quantity-desc flex items-center border-black">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <button
            className="btn md:mt-10"
            onClick={() => addProduct(product, qty)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
