// Script untuk mengisi database MongoDB dengan data menu dari project
// Jalankan: node seed.js

import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/kopimuclubuk';

const menuSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String
});

const Menu = mongoose.model('Menu', menuSchema);

const menus = [
  { title: "Butterscotch Coffee", price: 18000, image: "butterscotch.JPEG" },
  { title: "Latte Coffee", price: 15000, image: "lattecoffee.jpg" },
  { title: "Coffee Gula Aren", price: 12000, image: "kopigulaaren.jpg" },
  { title: "Paket Ayam Goreng Kampung", price: 25000, image: "ayamgorengkampungnasi.jpg" },
  { title: "Nasi Goreng Spesial", price: 13000, image: "nasigoreng.jpg" },
  { title: "Mie Goreng Spesial", price: 14000, image: "miegoreng.jpg" },
  { title: "Roti Canai", price: 14000, image: "roticanai.jpg" },
  { title: "Mendoan", price: 12000, image: "mendoan.jpg" },
  { title: "Cireng", price: 12000, image: "cireng.jpg" },
  { title: "Mix Platter", price: 21000, image: "mixplater.jpeg" },
  { title: "Churros", price: 15000, image: "churros.jpg" },
  { title: "Chocolate Lava Cake", price: 23000, image: "chocolatelava.jpg" }
];

async function seed() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await Menu.deleteMany({});
  await Menu.insertMany(menus);
  console.log('Menu berhasil dimasukkan ke database!');
  mongoose.disconnect();
}

seed();
