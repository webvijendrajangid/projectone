// Data connection
import mongoose from "mongoose";

type ConnectionObject = {
    isConnection?: number
}


const connection: ConnectionObject = {}

async function dbConnect():Promise<void> {
    if(connection.isConnection) {
        console.log("Already connected to database");
        return
    } 

    try{
        const db = await mongoose.connect(process.env.MONGODB_URL || '', {});
        connection.isConnection = db.connections[0].readyState;

        console.log("DB Connected Successfully");
        
    } catch(error) {
        console.log("Database connectin failed", error);

        process.exit(1);
        
    }
    
    
}

export default dbConnect; 