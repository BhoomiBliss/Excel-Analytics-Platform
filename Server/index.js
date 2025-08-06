const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/excelDashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dataSchema = new mongoose.Schema({}, { strict: false });
const DataModel = mongoose.model('Data', dataSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  await DataModel.insertMany(jsonData);
  res.json({ success: true, data: jsonData });
});

app.get('/data', async (req, res) => {
  const data = await DataModel.find({});
  res.json(data);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
