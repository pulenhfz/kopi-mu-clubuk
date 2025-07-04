import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Ganti dengan string koneksi MongoDB Anda
const MONGO_URI = 'mongodb://localhost:27017/kopimuclubuk';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

const orderSchema = new mongoose.Schema({
  name: String,
  menu: String,
  quantity: Number,
  payment: String,
  rating: String,
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

app.post('/api/order', async (req, res) => {
  try {
    const { name, menu, quantity, payment, rating } = req.body;
    const order = new Order({ name, menu, quantity, payment, rating });
    await order.save();
    res.status(201).json({ message: 'Order saved!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save order' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
