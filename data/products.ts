export type Category = "Neckband" | "Earbuds" | "Powerbank" | "Desk Lamp" | "Mouse & Pad" | "Keyboard Cleaner";
export type Product = { id: string; name: string; category: Category; price: number; specs: string; image: string; stock: boolean; featured?: boolean };

export const products: Product[] = [
  { id: "hoco-es70", name: "Hoco ES70 Long Battery Neckband", category: "Neckband", price: 850, specs: "32h battery · Deep bass", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&q=85", stock: true, featured: true },
  { id: "hoco-eq34", name: "Hoco EQ34 Plus ANC Earbuds", category: "Earbuds", price: 1250, specs: "ANC · Type-C charging", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=900&q=85", stock: true, featured: true },
  { id: "vendens-10k", name: "VEN-DENS 10000mAh Fast Charge", category: "Powerbank", price: 1100, specs: "22.5W output · Dual USB", image: "https://images.unsplash.com/photo-1609592424860-1d68aa3c2c70?w=900&q=85", stock: true, featured: true },
  { id: "lamp-mini", name: "Minimalist Study Desk Lamp", category: "Desk Lamp", price: 650, specs: "3 light modes · USB powered", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&q=85", stock: true },
  { id: "mouse-pad", name: "Wireless Mouse & Speed Pad", category: "Mouse & Pad", price: 450, specs: "Silent click · Smooth glide", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&q=85", stock: true },
  { id: "cleaner-kit", name: "Multi-function Keyboard Cleaner Kit", category: "Keyboard Cleaner", price: 250, specs: "6 tools · Pocket sized", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900&q=85", stock: true }
];
