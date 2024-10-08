import mongoose from 'mongoose';
import { dbUserData, dbThoughtData } from './data.js';
import User from '../src/models/User.js';
import Thought from '../src/models/Thought.js';
import db from '../src/config/connection.js';

// seed the database
const seedDatabase = async () => {
    try {
        // clear existing data
        await User.deleteMany({});
        await Thought.deleteMany({});

        // insert seed data
        const createdUsers = await User.insertMany(dbUserData);
        const createdThoughts = await Thought.insertMany(dbThoughtData);

        console.log('Data seeded successfully!');

        const users = await User.find();
        const thoughts = await Thought.find();
        console.log('Users:', users);
        console.log('Thoughts:', thoughts);


        // update users with their associated thoughts
        for (let user of createdUsers) {
            const userThoughts = createdThoughts.filter(thought => user.thoughts.includes(thought._id));
            await User.findByIdAndUpdate(user._id, { $set: { thoughts: userThoughts.map(th => th._id) } });
        }
        
        console.log('Users updated with their thoughts!');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        mongoose.connection.close();
    }
};

const run = async () => {
    await db();
    await seedDatabase();
};

run();
