import dotenv from 'dotenv';
import connectDB from './config/db.js';
// import cors from 'cors';
import app from './app.js';

// app.use(cors());

const PORT = process.env.PORT || 5000;

dotenv.config();

await connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });         

}).catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
});

