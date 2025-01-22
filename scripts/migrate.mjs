import "dotenv/config";
import { createClient } from "@sanity/client";

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_TOKEN,
  BASE_URL = "https://678b90681a6b89b27a2abdda.mockapi.io",
} = process.env;

if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_TOKEN) {
  console.error("Missing required environment variables. Please check your .env.local file.");
  process.exit(1);
}

const targetClient = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: NEXT_PUBLIC_SANITY_TOKEN,
});

async function uploadImageToSanity(imageUrl) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);
    const buffer = await response.arrayBuffer();
    const uploadedAsset = await targetClient.assets.upload("image", Buffer.from(buffer), {
      filename: imageUrl.split("/").pop(),
    });
    return uploadedAsset._id;
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }
}

async function migrateData() {
  console.log("Starting data migration...");

  try {
    const categoriesResponse = await fetch(`${BASE_URL}/api/products/categories`);
    if (!categoriesResponse.ok) throw new Error("Failed to fetch categories.");
    const categoriesData = await categoriesResponse.json();

    const productsResponse = await fetch(`${BASE_URL}/api/products/products`);
    if (!productsResponse.ok) throw new Error("Failed to fetch products.");
    const productsData = await productsResponse.json();

    const categoryIdMap = {};

    for (const category of categoriesData) {
      console.log(`Migrating category: ${category.name}`);
      const imageId = await uploadImageToSanity(category.image);

      const newCategory = {
        _type: "category",
        _id: `category-${category.id}`, // Ensure unique _id
        id: category.id,
        name: category.name,
        image: imageId ? { _type: "image", asset: { _ref: imageId } } : undefined,
      };

      const result = await targetClient.createOrReplace(newCategory);
      categoryIdMap[category.id] = result._id;
      console.log(`Migrated category: ${category.name} (ID: ${result._id})`);
    }

    for (const product of productsData) {
      console.log(`Migrating product: ${product.name}`);
      const imageId = await uploadImageToSanity(product.image);

      const newProduct = {
        _type: "product",
        _id: `product-${product.id}`, // Ensure unique _id
        id: product.id,
        name: product.name,
        price: product.price,
        slug: { _type: "slug", current: product.slug },
        image: imageId ? { _type: "image", asset: { _ref: imageId } } : undefined,
        category: {
          _type: "reference",
          _ref: categoryIdMap[product.category.id], // Reference to category
        },
      };

      const result = await targetClient.createOrReplace(newProduct);
      console.log(`Migrated product: ${product.name} (ID: ${result._id})`);
    }

    console.log("Data migration completed successfully!");
  } catch (error) {
    console.error("Error during migration:", error.message);
    process.exit(1);
  }
}

// migrateData();
