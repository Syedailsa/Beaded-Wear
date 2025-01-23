import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Ensure this is set only in server-side environments
});

export async function GET() {
  try {
    const query = `*[_type == "product"]{
      name,
      "imageUrl": image.asset->url,
      price,
      category->{
        name
      },
      slug {
        current
      }
    }`;

    const products = await client.fetch(query);
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching products:", error.message);
    } else {
      console.error("Error fetching products:", error);
    }
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
