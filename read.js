const {MongoClient} = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';


async function readTasks() {
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos')

    const todoARR = await todos.find({task:'simple task'}).toArray()

    todoARR.forEach((todo)=> console.log(JSON.stringify(todo)))
}

readTasks()