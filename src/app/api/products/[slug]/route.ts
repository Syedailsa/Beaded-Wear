import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log("Fetching product with slug:", slug);

  try {
    const query = `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      category,
      "imageUrl": image.asset->url,
      price
    }`;

    const product = await client.fetch(query, { slug });

    if (!product) {
      console.log(`Product with slug: ${slug} not found`);
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
