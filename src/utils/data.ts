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
    },
    {
        _id: new ObjectId(),
        username: 'user4',
        email: 'user4@example.com',
        thoughts: [],
        friends: []
    },
    {
        _id: new ObjectId(),
        username: 'user5',
        email: 'user5@example.com',
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
    },
    {
        _id: new ObjectId(),
        thoughtText: 'Just finished a great book!',
        username: 'user4',
        reactions: []
    },
    {
        _id: new ObjectId(),
        thoughtText: 'Had an amazing workout today!',
        username: 'user5',
        reactions: []
    },
    {
        _id: new ObjectId(),
        thoughtText: 'Learning new things every day!',
        username: 'user1',
        reactions: []
    },
    {
        _id: new ObjectId(),
        thoughtText: 'Enjoying a nice cup of coffee!',
        username: 'user2',
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
    },
    {
        reactionId: new ObjectId(),
        reactionBody: 'Well said!',
        username: 'user4'
    },
    {
        reactionId: new ObjectId(),
        reactionBody: 'I feel the same way!',
        username: 'user5'
    },
    {
        reactionId: new ObjectId(),
        reactionBody: 'Nice!',
        username: 'user1'
    },
    {
        reactionId: new ObjectId(),
        reactionBody: 'Couldn\'t agree more!',
        username: 'user3'
    }
];
// associate thoughts with users
dbUserData[0].thoughts.push(dbThoughtData[0]._id, dbThoughtData[5]._id);
dbUserData[1].thoughts.push(dbThoughtData[1]._id, dbThoughtData[6]._id);
dbUserData[2].thoughts.push(dbThoughtData[2]._id);
dbUserData[3].thoughts.push(dbThoughtData[3]._id);
dbUserData[4].thoughts.push(dbThoughtData[4]._id);
// associate reactions with thoughts
dbThoughtData[0].reactions.push(dbReactionData[0], dbReactionData[1]);
dbThoughtData[1].reactions.push(dbReactionData[2]);
dbThoughtData[2].reactions.push(dbReactionData[3]);
dbThoughtData[3].reactions.push(dbReactionData[4]);
dbThoughtData[4].reactions.push(dbReactionData[5]);
dbThoughtData[5].reactions.push(dbReactionData[6]);

// get a random item given an array
const getRandom = (arr: any[]) => {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
};
// get a random user
const getRandomUser = () => getRandom(dbUserData);

// add random friends to a user
const addRandomFriends = (user: { _id: ObjectId, friends: ObjectId[] }) => {
    const randomUser = getRandomUser();
    if (randomUser._id !== user._id && !user.friends.includes(randomUser._id)) {
        user.friends.push(randomUser._id);
    }
    else {
        addRandomFriends(user);
    }
};

// add random friends to each user
dbUserData.forEach(user => {
    const numberOfFriends = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numberOfFriends; i++) {
        addRandomFriends(user);
    }
});

// log the data
console.table(dbUserData);
console.table(dbThoughtData);
console.info('Seeding Complete! 🌱');
process.exit(0);
export { dbUserData, dbThoughtData, dbReactionData };
