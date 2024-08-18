import { del, get, patch, post } from "./cg-api.service";
import { IProductCreate, IProductUpdate } from "../interfaces/products";

export function listProducts() {
  return get(`/products`);
}

export function listOneProduct(productId: string) {
  return get(`/products/${productId}`);
}

export function createProduct(data: IProductCreate) {
  return post("/products", { data });
}

export function deleteProduct(productId: string) {
  return del(`/products/${productId}`);
}

export function updateProduct(productId: string, data: IProductUpdate) {
  return patch(`/products/${productId}`, { data });
}
