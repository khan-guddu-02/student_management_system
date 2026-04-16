import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 8080;

await connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });         

}).catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
});

