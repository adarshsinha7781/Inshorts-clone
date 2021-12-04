import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb+srv://adarshsinha7781:adarshsinha@clone-inshorts.5mx0q.mongodb.net/clone-inshorts?retryWrites=true&w=majority`
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;