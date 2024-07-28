const {MongoClient} = require('mongodb');
let db;
const url='mongodb://deekshi:deekshi1234@ac-iy2yzuk-shard-00-00.bcv0tzx.mongodb.net:27017,ac-iy2yzuk-shard-00-01.bcv0tzx.mongodb.net:27017,ac-iy2yzuk-shard-00-02.bcv0tzx.mongodb.net:27017/?replicaSet=atlas-qecj8y-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
const dbName= 'abhi';

//Function to connect to MongoDB
async function dbconnect(){
    try{
        const client = await MongoClient.connect(url);
        console.log('Connected to MongoDB');
        db=client.db(dbName);//Set the reference to the database
    }catch(err){
        console.error('Connection error:',err);
        throw new Error('Internal Server Error.please try again later.');//throw an error to be handled by the caller
    }
}
//Function to fetch data from a collection based on a query
async function getdata(collname,query){
    try{
        const output = await db.collection(collname).find(query).toArray();
        return output;
    } catch(err){
        console.log('Error fetching data from the databases.');
    }
}
//Function to find a single record in a collection based on a query
async function record(collname,query){
    try{
        const output = await db.collection(collname).findOne(query);
        //use findone to get a single document
        if(!output){
            throw new Error('User not found.please provide valid details');
        }
        return output;
    } catch(err){
        console.error('Error finding record',err);
        throw new Error('User not found.please provide valid details');
    }   
}
//Function to insert data into a collection
async function insertdata(collname,data){
    try{
        const output=await db.collection(collname).insertOne(data);
        return 'Sucessfully registered';
    }catch(err){
        console.error('Error inserting data',err);
        throw new Error('Registration failed.please try again');
    }
}
//Function to update a record in the database
async function updateRecord(collname,filter,update){
    try{
        const result=await db.collection(collname).updateOne(filter,{$set:update});
        if(result.modifiedCount===0){
            throw new Error('No changes detected or user not found');
        }
        return 'User details updated successfully';
    }catch(err){
        console.error('Error updating record',err);
        throw new Error('User detais update failed.please try agin');
    }
}
//Function to create a new collection
async function createCollection(collname,options={}){
    try{
        await db.createCollection(collname,options);
    } catch(err){
        console.error('Error creating collection',err);
        throw new Error('Failed to create collection.please try again');
    }
}
module.exports={
    dbconnect,
    getdata,
    record,
    insertdata,
    updateRecord,
    createCollection
};