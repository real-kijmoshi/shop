const { MongoClient } = require("mongodb");

// Adres URL bazy danych
const url = "mongodb://localhost:27017";

// Nazwa bazy danych
const dbName = "myshop";

// Funkcja tworząca połączenie z bazą danych
const connect = async () => {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  const db = client.db(dbName);
  return db;
};

// Model produktu
const productSchema = {
  name: String,
  price: Number,
  description: String,
};

// Model zamówienia
const orderSchema = {
  products: [productSchema],
  totalPrice: Number,
  status: String,
  email: String,
};

// Funkcja dodająca produkt do bazy danych
const addProduct = async (product) => {
  const db = await connect();
  const collection = db.collection("products");
  const result = await collection.insertOne(product);
  return result;
};

// Funkcja pobierająca wszystkie produkty z bazy danych
const getAllProducts = async () => {
  const db = await connect();
  const collection = db.collection("products");
  const result = await collection.find({}).toArray();
  return result;
};

// Funkcja tworząca zamówienie w bazie danych
const createOrder = async (order) => {
  const db = await connect();
  const collection = db.collection("orders");
  const result = await collection.insertOne(order);
  return result;
};

// Funkcja pobierająca wszystkie zamówienia z bazy danych
const getAllOrders = async () => {
  const db = await connect();
  const collection = db.collection("orders");
  const result = await collection.find({}).toArray();
  return result;
};

// Eksportowanie funkcji i modeli
module.exports = {
  addProduct,
  getAllProducts,
  createOrder,
  getAllOrders,
  productSchema,
  orderSchema,
};
