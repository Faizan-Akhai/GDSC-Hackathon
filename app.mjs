import express from 'express';
import cors from 'cors';
import axios from 'axios';
import multer from 'multer';

const app = express();



app.use(cors());
app.use(express.json())

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/",(req,res) => {
    res.send("Hello World") 
 });

 
app.post('/GDSC', async (req, res) => {
    try {
      const imageUrl = req.body.imageUrl; 

      const predictionEndpoint =  process.env.AZUREENDPOINTURL;
      const predictionKey =  process.env.APIKEY;
  
      const response = await axios.post(
        predictionEndpoint,
        {
          Url: imageUrl,
        },
        {
          headers: {
            'Prediction-Key': predictionKey,
            'Content-Type': 'application/json',
          },
        }
      );
  
      const predictions = response.data.predictions;
      res.json({ predictions });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json(error.message);
    }
  });

  app.post('/GDSC1', upload.array('image'), async (req, res) => {
    try {
      console.log("api clled")
      const images = req.files;
  
      if (!images || images.length === 0) {
        return res.status(400).json({ message: 'No files uploaded.' });
      }
  
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`image${index + 1}`, image.buffer, {
          filename: image.originalname,
        });
      });
  
      // Continue with Azure API call
      const predictionEndpoint = process.env.AZUREENDPOINTURL;
      const predictionKey = process.env.APIKEY;
  
      const response = await axios.post(
        predictionEndpoint,
        formData,
        {
          headers: {
            'Prediction-Key': predictionKey,
            'Content-Type': 'application/octet-stream',
          },
        }
      );
  
      const predictions = response.data.predictions;
      res.json({ predictions });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ message: error.message });
    }

  });

export default app;