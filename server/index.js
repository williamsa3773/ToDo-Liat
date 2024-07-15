const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});

async function run() {
	try{
		await client.connect();
		await client.db('admin').command({ ping: 1 });
		console.log("pinged your deployment. successfully connected");
	} finally {
		await client.close();
	}
}

run().catch(console.dir);