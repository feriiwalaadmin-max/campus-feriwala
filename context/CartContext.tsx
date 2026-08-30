"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product, products } from "@/data/products";

export type CartItem = Product & { quantity: number };
export type Order = { id: string; createdAt: string; items: CartItem[]; total: number; delivery: string; status: string };
type Context = { items: CartItem[]; orders: Order[]; wishlist: string[]; customProducts: Product[]; addToCart: (p: Product) => void; removeFromCart: (id: string) => void; updateQuantity: (id: string, q: number) => void; clearCart: () => void; saveOrder: (o: Order) => void; toggleWishlist: (id: string) => void; toggleStock: (id: string) => void; addProduct: (p: Product) => void; allProducts: Product[]; cartCount: number; cartTotal: number };
const Cart = createContext<Context | null>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]), [orders, setOrders] = useState<Order[]>([]), [wishlist, setWishlist] = useState<string[]>([]), [customProducts, setCustomProducts] = useState<Product[]>([]), [ready, setReady] = useState(false);
  useEffect(() => { try { setItems(JSON.parse(localStorage.getItem("cf-cart") || "[]")); setOrders(JSON.parse(localStorage.getItem("cf-orders") || "[]")); setWishlist(JSON.parse(localStorage.getItem("cf-wishlist") || "[]")); setCustomProducts(JSON.parse(localStorage.getItem("cf-products") || "[]")); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem("cf-cart", JSON.stringify(items)); }, [items, ready]);
  useEffect(() => { if (ready) { localStorage.setItem("cf-orders", JSON.stringify(orders)); localStorage.setItem("cf-wishlist", JSON.stringify(wishlist)); localStorage.setItem("cf-products", JSON.stringify(customProducts)); } }, [orders, wishlist, customProducts, ready]);
  const allProducts = useMemo(() => [...products.map(p => customProducts.find(c => c.id === p.id) || p), ...customProducts.filter(c => !products.some(p => p.id === c.id))], [customProducts]);
  const addToCart = (p: Product) => setItems(old => { const found = old.find(i => i.id === p.id); return found ? old.map(i => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i) : [...old, { ...p, quantity: 1 }]; });
  const removeFromCart = (id: string) => setItems(old => old.filter(i => i.id !== id));
  const updateQuantity = (id: string, q: number) => q < 1 ? removeFromCart(id) : setItems(old => old.map(i => i.id === id ? { ...i, quantity: q } : i));
  const toggleStock = (id: string) => setCustomProducts(old => { const base = allProducts.find(p => p.id === id); if (!base) return old; const existing = old.find(p => p.id === id); return existing ? old.map(p => p.id === id ? { ...p, stock: !p.stock } : p) : [...old, { ...base, stock: !base.stock }]; });
  return <Cart.Provider value={{ items, orders, wishlist, customProducts, allProducts, addToCart, removeFromCart, updateQuantity, clearCart: () => setItems([]), saveOrder: o => setOrders(old => [o, ...old]), toggleWishlist: id => setWishlist(old => old.includes(id) ? old.filter(x => x !== id) : [...old, id]), toggleStock, addProduct: p => setCustomProducts(old => [...old, p]), cartCount: items.reduce((n, i) => n + i.quantity, 0), cartTotal: items.reduce((n, i) => n + i.price * i.quantity, 0) }}>{children}</Cart.Provider>;
}
export const useCart = () => { const c = useContext(Cart); if (!c) throw new Error("useCart must be inside CartProvider"); return c; };
