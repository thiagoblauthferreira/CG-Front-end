import { del, get, patch, post } from "./cg-api.service";
import { IProductCreate, IProductUpdate } from "../interfaces/products";

export function listProducts() {
  return get(`/products`);
}

export function listOneProduct(productId: string) {
  return get(`/products/${productId}`);
}

export function createProduct(payload: IProductCreate) {
  return post("/products", payload);
}

export function deleteProduct(productId: string) {
  return del(`/products/${productId}`);
}

export function updateProduct(productId: string, payload: IProductUpdate) {
  return patch(`/products/${productId}`, payload);
}
