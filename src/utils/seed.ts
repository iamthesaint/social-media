import mongoose from 'mongoose';
import { dbUserData, dbThoughtData } from '../utils/data.js';
import User from '../models/User.js';
import Thought from '../models/Thought.js';
import db from '../config/connection.js';

console.log('Starting seed script...');

// seed the database
export const seedDatabase = async () => {
    try {
        await db();
        // clear existing data
        await User.deleteMany({});
        await Thought.deleteMany({});

        // insert seed data
        const createdUsers = await User.insertMany(dbUserData);
        console.log('Created users:', createdUsers);

        const createdThoughts = await Thought.insertMany(dbThoughtData);
        console.log('Created thoughts:', createdThoughts);

        console.log('Data seeded successfully!');

        // update users with their associated thoughts
        for (let user of createdUsers) {
            const userThoughts = createdThoughts.filter(thought => thought.username === user.username);
            await User.findByIdAndUpdate(user._id, { $set: { thoughts: userThoughts.map(th => th._id) } });
        }
        console.log('Users updated with their thoughts!');

        // log the updated users with thoughts
        const users = await User.find();
        const thoughts = await Thought.find();
        console.log('Updated users:', users);
        console.log('Thoughts:', thoughts);
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    };

}

seedDatabase();
