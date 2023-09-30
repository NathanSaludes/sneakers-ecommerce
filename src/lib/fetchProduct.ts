import product from "@/data/test-data.json"

export function fetchProduct(): Promise<typeof product> {
  return new Promise((resolve, reject) => {
    if (product) {
      resolve(product)
    } else {
      reject("Item not found.")
    }
  })
}

export type Product = typeof product
