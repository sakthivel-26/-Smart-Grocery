import { v4 as uuid } from 'uuid';
import type { User, Category, Brand, Product, Customer, Supplier, Coupon, StoreSettings } from '@/types';

export const defaultSettings: StoreSettings = {
  storeName: 'Smart Grocery Store',
  storeAddress: '123 Main Street, Market Complex',
  storeCity: 'Mumbai',
  storeState: 'Maharashtra',
  storePincode: '400001',
  storePhone: '+91 98765 43210',
  storeEmail: 'info@smartgrocery.com',
  gstNumber: '27AABCU9603R1ZM',
  currency: 'INR',
  currencySymbol: '₹',
  taxEnabled: true,
  defaultTaxRate: 18,
  invoicePrefix: 'INV',
  invoiceFooter: 'Thank you for shopping with us! Visit again.',
  loyaltyPointsPerRupee: 1,
  loyaltyRedemptionRate: 0.5,
  // Payment Settings - REPLACE WITH YOUR UPI ID
  upiId: 'yourstore@upi',  // <-- PUT YOUR UPI ID HERE (e.g., 9876543210@paytm, yourname@oksbi)
  upiMerchantName: 'Smart Grocery Store',
  razorpayKeyId: '',  // <-- PUT YOUR RAZORPAY KEY ID HERE (get from razorpay.com)
  razorpayEnabled: false,
};

export const seedUsers: User[] = [
  { id: uuid(), name: 'Rajesh Kumar', email: 'admin@smartgrocery.com', role: 'admin', phone: '9876543210', isActive: true, createdAt: new Date().toISOString(), lastLogin: new Date().toISOString() },
  { id: uuid(), name: 'Priya Sharma', email: 'manager@smartgrocery.com', role: 'manager', phone: '9876543211', isActive: true, createdAt: new Date().toISOString() },
  { id: uuid(), name: 'Amit Patel', email: 'cashier@smartgrocery.com', role: 'cashier', phone: '9876543212', isActive: true, createdAt: new Date().toISOString() },
];

export const seedCategories: Category[] = [
  { id: 'cat-1', name: 'Fruits & Vegetables', description: 'Fresh fruits and vegetables', isActive: true, createdAt: new Date().toISOString() },
  { id: 'cat-2', name: 'Dairy & Eggs', description: 'Milk, cheese, butter, eggs', isActive: true, createdAt: new Date().toISOString() },
  { id: 'cat-3', name: 'Grains & Cereals', description: 'Rice, wheat, oats, cereals', isActive: true, createdAt: new Date().toISOString() },
  { id: 'cat-4', name: 'Snacks & Beverages', description: 'Chips, biscuits, drinks', isActive: true, createdAt: new Date().toISOString() },
  { id: 'cat-5', name: 'Spices & Masalas', description: 'Cooking spices and masalas', isActive: true, createdAt: new Date().toISOString() },
  { id: 'cat-6', name: 'Personal Care', description: 'Soaps, shampoos, toothpaste', isActive: true, createdAt: new Date().toISOString() },
  { id: 'cat-7', name: 'Household Items', description: 'Cleaning supplies, detergents', isActive: true, createdAt: new Date().toISOString() },
  { id: 'cat-8', name: 'Cooking Oil & Ghee', description: 'Cooking oils and ghee', isActive: true, createdAt: new Date().toISOString() },
  { id: 'cat-9', name: 'Frozen Foods', description: 'Frozen vegetables, ice cream', isActive: true, createdAt: new Date().toISOString() },
  { id: 'cat-10', name: 'Baby Care', description: 'Baby food, diapers, wipes', isActive: true, createdAt: new Date().toISOString() },
];

export const seedBrands: Brand[] = [
  { id: 'brand-1', name: 'Amul', description: 'Dairy products', isActive: true, createdAt: new Date().toISOString() },
  { id: 'brand-2', name: 'Fortune', description: 'Cooking oils and foods', isActive: true, createdAt: new Date().toISOString() },
  { id: 'brand-3', name: 'Tata', description: 'FMCG products', isActive: true, createdAt: new Date().toISOString() },
  { id: 'brand-4', name: 'ITC', description: 'Food and personal care', isActive: true, createdAt: new Date().toISOString() },
  { id: 'brand-5', name: 'Britannia', description: 'Biscuits and dairy', isActive: true, createdAt: new Date().toISOString() },
  { id: 'brand-6', name: 'Nestle', description: 'Food and beverages', isActive: true, createdAt: new Date().toISOString() },
  { id: 'brand-7', name: 'P&G', description: 'Personal and home care', isActive: true, createdAt: new Date().toISOString() },
  { id: 'brand-8', name: 'HUL', description: 'Home and personal care', isActive: true, createdAt: new Date().toISOString() },
  { id: 'brand-9', name: 'MDH', description: 'Spices and masalas', isActive: true, createdAt: new Date().toISOString() },
  { id: 'brand-10', name: 'Fresh Farm', description: 'Fresh produce', isActive: true, createdAt: new Date().toISOString() },
];

const today = new Date();
const futureDate = (months: number) => {
  const d = new Date(today);
  d.setMonth(d.getMonth() + months);
  return d.toISOString().split('T')[0];
};

export const seedProducts: Product[] = [
  { id: 'prod-1', name: 'Amul Taza Milk 1L', sku: 'AMU-MLK-001', barcode: '8901262011204', categoryId: 'cat-2', brandId: 'brand-1', description: 'Toned milk 1 litre packet', unit: 'Litre', purchasePrice: 48, sellingPrice: 54, mrp: 56, gstPercentage: 0, hsnCode: '0401', stockQuantity: 150, reorderLevel: 30, batchNumber: 'B001', expiryDate: futureDate(1), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-2', name: 'Fortune Sunflower Oil 1L', sku: 'FOR-OIL-001', barcode: '8901058002478', categoryId: 'cat-8', brandId: 'brand-2', description: 'Refined sunflower oil', unit: 'Litre', purchasePrice: 140, sellingPrice: 165, mrp: 175, gstPercentage: 5, hsnCode: '1512', stockQuantity: 80, reorderLevel: 20, batchNumber: 'B002', expiryDate: futureDate(12), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-3', name: 'Tata Salt 1kg', sku: 'TAT-SLT-001', barcode: '8901725133602', categoryId: 'cat-5', brandId: 'brand-3', description: 'Iodised salt', unit: 'Kg', purchasePrice: 18, sellingPrice: 22, mrp: 24, gstPercentage: 0, hsnCode: '2501', stockQuantity: 200, reorderLevel: 50, batchNumber: 'B003', expiryDate: futureDate(24), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-4', name: 'Aashirvaad Whole Wheat Atta 5kg', sku: 'ITC-ATT-001', barcode: '8901063084001', categoryId: 'cat-3', brandId: 'brand-4', description: 'Whole wheat flour 5kg pack', unit: 'Kg', purchasePrice: 230, sellingPrice: 270, mrp: 285, gstPercentage: 0, hsnCode: '1101', stockQuantity: 60, reorderLevel: 15, batchNumber: 'B004', expiryDate: futureDate(6), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-5', name: 'Britannia Good Day Butter 250g', sku: 'BRI-BIS-001', barcode: '8901063010017', categoryId: 'cat-4', brandId: 'brand-5', description: 'Butter cookies 250g pack', unit: 'Pack', purchasePrice: 38, sellingPrice: 45, mrp: 48, gstPercentage: 18, hsnCode: '1905', stockQuantity: 120, reorderLevel: 25, batchNumber: 'B005', expiryDate: futureDate(8), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-6', name: 'Maggi 2-Minute Noodles Pack of 4', sku: 'NES-NOD-001', barcode: '8901058854305', categoryId: 'cat-4', brandId: 'brand-6', description: 'Instant noodles 4-pack', unit: 'Pack', purchasePrice: 42, sellingPrice: 52, mrp: 56, gstPercentage: 12, hsnCode: '1902', stockQuantity: 90, reorderLevel: 20, batchNumber: 'B006', expiryDate: futureDate(10), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-7', name: 'Ariel Detergent Powder 1kg', sku: 'PNG-DET-001', barcode: '4902430905817', categoryId: 'cat-7', brandId: 'brand-7', description: 'Washing powder 1kg', unit: 'Kg', purchasePrice: 155, sellingPrice: 185, mrp: 199, gstPercentage: 18, hsnCode: '3402', stockQuantity: 45, reorderLevel: 10, batchNumber: 'B007', expiryDate: futureDate(24), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-8', name: 'Lux Soap 100g (Pack of 3)', sku: 'HUL-SOP-001', barcode: '8901030663048', categoryId: 'cat-6', brandId: 'brand-8', description: 'Beauty soap 3-pack', unit: 'Pack', purchasePrice: 90, sellingPrice: 110, mrp: 117, gstPercentage: 18, hsnCode: '3401', stockQuantity: 70, reorderLevel: 15, batchNumber: 'B008', expiryDate: futureDate(18), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-9', name: 'MDH Garam Masala 100g', sku: 'MDH-MSL-001', barcode: '8902519002014', categoryId: 'cat-5', brandId: 'brand-9', description: 'Blended spices 100g', unit: 'Pack', purchasePrice: 65, sellingPrice: 78, mrp: 82, gstPercentage: 5, hsnCode: '0910', stockQuantity: 55, reorderLevel: 10, batchNumber: 'B009', expiryDate: futureDate(12), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-10', name: 'Fresh Bananas 1 Dozen', sku: 'FF-BAN-001', barcode: '1000000000010', categoryId: 'cat-1', brandId: 'brand-10', description: 'Fresh bananas 12 pieces', unit: 'Dozen', purchasePrice: 35, sellingPrice: 48, mrp: 50, gstPercentage: 0, hsnCode: '0803', stockQuantity: 40, reorderLevel: 10, batchNumber: 'B010', expiryDate: futureDate(0.25), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-11', name: 'Amul Butter 500g', sku: 'AMU-BUT-001', barcode: '8901262150132', categoryId: 'cat-2', brandId: 'brand-1', description: 'Pasteurized butter 500g', unit: 'Pack', purchasePrice: 240, sellingPrice: 275, mrp: 285, gstPercentage: 12, hsnCode: '0405', stockQuantity: 30, reorderLevel: 8, batchNumber: 'B011', expiryDate: futureDate(3), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-12', name: 'Tata Tea Gold 500g', sku: 'TAT-TEA-001', barcode: '8901725134012', categoryId: 'cat-4', brandId: 'brand-3', description: 'Premium tea 500g', unit: 'Pack', purchasePrice: 210, sellingPrice: 250, mrp: 265, gstPercentage: 5, hsnCode: '0902', stockQuantity: 65, reorderLevel: 15, batchNumber: 'B012', expiryDate: futureDate(18), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-13', name: 'Fresh Tomatoes 1kg', sku: 'FF-TOM-001', barcode: '1000000000013', categoryId: 'cat-1', brandId: 'brand-10', description: 'Fresh red tomatoes', unit: 'Kg', purchasePrice: 25, sellingPrice: 40, mrp: 45, gstPercentage: 0, hsnCode: '0702', stockQuantity: 5, reorderLevel: 15, batchNumber: 'B013', isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-14', name: 'Nescafe Classic 200g', sku: 'NES-COF-001', barcode: '8901058847345', categoryId: 'cat-4', brandId: 'brand-6', description: 'Instant coffee 200g jar', unit: 'Pack', purchasePrice: 350, sellingPrice: 420, mrp: 450, gstPercentage: 18, hsnCode: '2101', stockQuantity: 25, reorderLevel: 5, batchNumber: 'B014', expiryDate: futureDate(12), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-15', name: 'Fortune Basmati Rice 5kg', sku: 'FOR-RIC-001', barcode: '8901058002911', categoryId: 'cat-3', brandId: 'brand-2', description: 'Premium basmati rice 5kg', unit: 'Kg', purchasePrice: 380, sellingPrice: 450, mrp: 480, gstPercentage: 5, hsnCode: '1006', stockQuantity: 35, reorderLevel: 10, batchNumber: 'B015', expiryDate: futureDate(18), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-16', name: 'Fresh Onions 1kg', sku: 'FF-ONI-001', barcode: '1000000000016', categoryId: 'cat-1', brandId: 'brand-10', description: 'Fresh onions', unit: 'Kg', purchasePrice: 20, sellingPrice: 35, mrp: 38, gstPercentage: 0, hsnCode: '0703', stockQuantity: 3, reorderLevel: 20, batchNumber: 'B016', isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-17', name: 'Surf Excel Quick Wash 1kg', sku: 'HUL-DET-001', barcode: '8901030623523', categoryId: 'cat-7', brandId: 'brand-8', description: 'Detergent powder 1kg', unit: 'Kg', purchasePrice: 125, sellingPrice: 155, mrp: 165, gstPercentage: 18, hsnCode: '3402', stockQuantity: 55, reorderLevel: 12, batchNumber: 'B017', expiryDate: futureDate(24), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-18', name: 'Amul Cheese Slices 200g', sku: 'AMU-CHS-001', barcode: '8901262250214', categoryId: 'cat-2', brandId: 'brand-1', description: 'Processed cheese 10 slices', unit: 'Pack', purchasePrice: 95, sellingPrice: 115, mrp: 120, gstPercentage: 12, hsnCode: '0406', stockQuantity: 22, reorderLevel: 5, batchNumber: 'B018', expiryDate: futureDate(4), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-19', name: 'MDH Chilli Powder 200g', sku: 'MDH-CHL-001', barcode: '8902519003028', categoryId: 'cat-5', brandId: 'brand-9', description: 'Red chilli powder 200g', unit: 'Pack', purchasePrice: 70, sellingPrice: 88, mrp: 95, gstPercentage: 5, hsnCode: '0904', stockQuantity: 42, reorderLevel: 10, batchNumber: 'B019', expiryDate: futureDate(12), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'prod-20', name: 'Colgate MaxFresh Toothpaste 150g', sku: 'PNG-THP-001', barcode: '8901314501103', categoryId: 'cat-6', brandId: 'brand-7', description: 'Cooling crystal toothpaste', unit: 'Pack', purchasePrice: 85, sellingPrice: 105, mrp: 110, gstPercentage: 18, hsnCode: '3306', stockQuantity: 60, reorderLevel: 15, batchNumber: 'B020', expiryDate: futureDate(18), isActive: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];

export const seedCustomers: Customer[] = [
  { id: 'cust-1', name: 'Suresh Mehta', phone: '9811111111', email: 'suresh@email.com', address: '45 MG Road', city: 'Mumbai', state: 'Maharashtra', pincode: '400002', loyaltyPoints: 250, creditLimit: 5000, outstandingAmount: 0, isActive: true, createdAt: new Date().toISOString() },
  { id: 'cust-2', name: 'Anita Singh', phone: '9822222222', email: 'anita@email.com', address: '78 Park Avenue', city: 'Mumbai', state: 'Maharashtra', pincode: '400003', loyaltyPoints: 180, creditLimit: 3000, outstandingAmount: 450, isActive: true, createdAt: new Date().toISOString() },
  { id: 'cust-3', name: 'Vikram Desai', phone: '9833333333', email: 'vikram@email.com', address: '12 Hill View', city: 'Pune', state: 'Maharashtra', pincode: '411001', loyaltyPoints: 520, creditLimit: 10000, outstandingAmount: 1200, isActive: true, createdAt: new Date().toISOString() },
  { id: 'cust-4', name: 'Meera Joshi', phone: '9844444444', email: 'meera@email.com', address: '34 Lake Side', city: 'Mumbai', state: 'Maharashtra', pincode: '400004', loyaltyPoints: 90, creditLimit: 2000, outstandingAmount: 0, isActive: true, createdAt: new Date().toISOString() },
  { id: 'cust-5', name: 'Rahul Verma', phone: '9855555555', email: 'rahul@email.com', address: '56 Station Road', city: 'Thane', state: 'Maharashtra', pincode: '400601', loyaltyPoints: 340, creditLimit: 5000, outstandingAmount: 800, isActive: true, createdAt: new Date().toISOString() },
];

export const seedSuppliers: Supplier[] = [
  { id: 'sup-1', name: 'Metro Wholesale', contactPerson: 'Rakesh Agarwal', phone: '9800000001', email: 'metro@wholesale.com', address: '10 Industrial Area', city: 'Mumbai', state: 'Maharashtra', pincode: '400005', gstNumber: '27AABCM1234R1ZM', outstandingDues: 25000, isActive: true, createdAt: new Date().toISOString() },
  { id: 'sup-2', name: 'Fresh Farms Direct', contactPerson: 'Kiran Patil', phone: '9800000002', email: 'fresh@farms.com', address: '22 Agri Market', city: 'Nashik', state: 'Maharashtra', pincode: '422001', gstNumber: '27AABCF5678R1ZM', outstandingDues: 8500, isActive: true, createdAt: new Date().toISOString() },
  { id: 'sup-3', name: 'National Distributors', contactPerson: 'Sanjay Gupta', phone: '9800000003', email: 'national@dist.com', address: '5 Commerce Park', city: 'Delhi', state: 'Delhi', pincode: '110001', gstNumber: '07AABCN9012R1ZM', outstandingDues: 45000, isActive: true, createdAt: new Date().toISOString() },
  { id: 'sup-4', name: 'Dairy Co-op Society', contactPerson: 'Mahesh Deshmukh', phone: '9800000004', email: 'dairy@coop.com', address: '8 Milk Colony', city: 'Anand', state: 'Gujarat', pincode: '388001', gstNumber: '24AABCD3456R1ZM', outstandingDues: 12000, isActive: true, createdAt: new Date().toISOString() },
];

export const seedCoupons: Coupon[] = [
  { id: 'coup-1', code: 'WELCOME10', description: 'Welcome offer - 10% off', discountType: 'percentage', discountValue: 10, minOrderAmount: 500, maxDiscount: 200, usageLimit: 100, usedCount: 23, isActive: true, expiryDate: futureDate(3), createdAt: new Date().toISOString() },
  { id: 'coup-2', code: 'FLAT50', description: 'Flat ₹50 off on orders above ₹300', discountType: 'fixed', discountValue: 50, minOrderAmount: 300, maxDiscount: 50, usageLimit: 200, usedCount: 67, isActive: true, expiryDate: futureDate(2), createdAt: new Date().toISOString() },
  { id: 'coup-3', code: 'SAVE20', description: '20% off - Max ₹500', discountType: 'percentage', discountValue: 20, minOrderAmount: 1000, maxDiscount: 500, usageLimit: 50, usedCount: 12, isActive: true, expiryDate: futureDate(1), createdAt: new Date().toISOString() },
];
