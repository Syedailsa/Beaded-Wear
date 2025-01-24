// // import { createClient } from "@sanity/client";
// // import { NextResponse } from "next/server";

// // const client = createClient({
// //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
// //   apiVersion: "2023-01-01",
// //   useCdn: false,
// //   token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Ensure this is set only in server-side environments
// // });

// // export async function GET() {
// //   try {
// //     const query = `*[_type == "product"]{
// //       name,
// //       "imageUrl": image.asset->url,
// //       price,
// //       category->{
// //         name
// //       },
// //       slug {
// //         current
// //       }
// //     }`;

// //     const products = await client.fetch(query);
// //     return NextResponse.json(products, { status: 200 });
// //   } catch (error) {
// //     if (error instanceof Error) {
// //       console.error("Error fetching products:", error.message);
// //     } else {
// //       console.error("Error fetching products:", error);
// //     }
// //     return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
// //   }
// // }

// import { createClient } from "@sanity/client";
// import { NextResponse } from "next/server";

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   apiVersion: "2023-01-01",
//   useCdn: false,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Ensure this is set only in server-side environments
// });

// // Handler for both `/api/products` and `/api/products/[slug]`
// export async function GET(req: Request, { params }: { params: { slug?: string } }) {
//   try {
//     console.log("Fetching products...");

//     // Check if a specific product slug is provided
//     if (params.slug) {
//       console.log(`Fetching product with slug: ${params.slug}`);

//       // Fetch the single product based on the slug
//       const query = `*[_type == "product" && slug.current == $slug][0]{
//         _id,
//         name,
//         category,
//         "imageUrl": image.asset->url,
//         price
//       }`;

//       const product = await client.fetch(query, { slug: params.slug });

//       if (!product) {
//         console.log(`Product with slug: ${params.slug} not found`);
//         return NextResponse.json({ error: "Product not found" }, { status: 404 });
//       }

//       console.log("Product found:", product);
//       return NextResponse.json(product);
//     }

//     // If no slug, fetch all products
//     console.log("Fetching all products");

//     const query = `*[_type == "product"]{
//       name,
//       "imageUrl": image.asset->url,
//       price,
//       category->{
//         name
//       },
//       slug {
//         current
//       }
//     }`;

//     const products = await client.fetch(query);

//     if (!products || products.length === 0) {
//       console.log("No products found");
//       return NextResponse.json({ error: "No products found" }, { status: 404 });
//     }

//     console.log("Products found:", products);
//     return NextResponse.json(products, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching products:", error instanceof Error ? error.message : error);
//     return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
//   }
// }
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
    console.error("Error fetching products:", error instanceof Error ? error.message : String(error));
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
