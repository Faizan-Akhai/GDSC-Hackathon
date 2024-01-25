import dotenv from 'dotenv';
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

export default {
    PORT: process.env.PORT,
    AZUREENDPOINTURL:process.env.AZUREENDPOINTURL,
    APIKEY:process.env.APIKEY,
  };
  