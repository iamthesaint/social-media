import { ObjectId } from 'bson';

// seed user data
const dbUserData = [
    {
        _id: new ObjectId(),
        username: 'user1',
        email: 'user1@example.com',
        thoughts: [] as ObjectId[],
        friends: [] as ObjectId[]
    },
    {
        _id: new ObjectId(),
        username: 'user2',
        email: 'user2@example.com',
        thoughts: [],
        friends: []
    },
    {
        _id: new ObjectId(),
        username: 'user3',
        email: 'user3@example.com',
        thoughts: [],
        friends: []
    }
];

// seed thought data
const dbThoughtData = [
    {
        _id: new ObjectId(),
        thoughtText: 'This is my first thought!',
        username: 'user1',
        reactions: [] as { reactionId: ObjectId, reactionBody: string, username: string }[]
    },
    {
        _id: new ObjectId(),
        thoughtText: 'Loving the weather today!',
        username: 'user2',
        reactions: []
    },
    {
        _id: new ObjectId(),
        thoughtText: 'Can\'t wait for the weekend!',
        username: 'user3',
        reactions: []
    }
];

// seed reaction data
const dbReactionData = [
    {
        reactionId: new ObjectId(),
        reactionBody: 'Great thought!',
        username: 'user2'
    },
    {
        reactionId: new ObjectId(),
        reactionBody: 'Totally agree!',
        username: 'user3'
    },
    {
        reactionId: new ObjectId(),
        reactionBody: 'Interesting perspective!',
        username: 'user1'
    }
];

// Associate thoughts with users
dbUserData[0].thoughts.push(dbThoughtData[0]._id);
dbUserData[1].thoughts.push(dbThoughtData[1]._id);
dbUserData[2].thoughts.push(dbThoughtData[2]._id);

// Associate reactions with thoughts
dbThoughtData[0].reactions.push(dbReactionData[0]);
dbThoughtData[1].reactions.push(dbReactionData[1]);
dbThoughtData[2].reactions.push(dbReactionData[2]);

export { dbUserData, dbThoughtData, dbReactionData };