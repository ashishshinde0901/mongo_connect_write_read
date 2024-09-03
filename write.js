const {MongoClient} = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';


async function writeTask(){
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos')

    const todo = {
        task: 'an important task',
        priority: 2,
        owner: 'manager'
    }

    const result = await todos.insertOne(todo)
    console.log(result)

}

async function writeTasks(){
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos')



    const result = await todos.insertMany([
        {
            task: 'simple task',
            priority: 4,
            // owner: 'security'
        },
        {
            task: 'complicated task',
            priority: 1,
            // owner: 'CEO'
        },
        {
            task: 'Admin task',
            priority: 3,
            // owner: 'manager'
        },
        {
            task: 'extra task',
            priority: 2,
            // owner: 'executive'
        }
    ])

    console.log(result)


}

writeTasks()