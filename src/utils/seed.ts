import mongoose from 'mongoose';
import { dbUserData, dbThoughtData } from '../utils/data.js';
import User from '../models/User.js';
import Thought from '../models/Thought.js';
import db from '../config/connection.js';

// seed the database
const seedDatabase = async () => {
    try {
        // clear existing data
        await User.deleteMany({});
        await Thought.deleteMany({});
        console.log('Existing data cleared.');

        // insert seed data
        const createdUsers = await User.insertMany(dbUserData);
        const createdThoughts = await Thought.insertMany(dbThoughtData);
        
        console.log('Data seeded successfully!');
        console.log('Created Users:', createdUsers);
        console.log('Created Thoughts:', createdThoughts);

    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await mongoose.connection.close(); // close the connection
    }
};

// run the seed script
const run = async () => {
    await db(); // connect to the database
    await seedDatabase(); // seed the database
};

run();
