import { ObjectId } from "bson";
import moment from "moment";

const getRandomDate = () => {
  const randomNumberOfDays = Math.floor(Math.random() * 5) + 1;
  const currentDate = new Date();
  const randomDate = new Date(
    currentDate.setDate(currentDate.getDate() - randomNumberOfDays)
  );
  return randomDate;
};

const dbUserData = [
  {
    _id: new ObjectId(),
    username: "naruto_uzumaki",
    email: "naruto@konohagakure.com",
    thoughts: [] as ObjectId[],
    friends: [] as ObjectId[],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "saitama1p",
    email: "saitama@heroassociation.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "light_yagami",
    email: "light@deathnote.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "levi_ackerman",
    email: "levi@surveycorps.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "satoru",
    email: "satoru.gojo@jujutsuhigh.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "ichigo-kurosaki",
    email: "ichi@soulsociety.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "nezuko",
    email: "nezkam@newdemons.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "killua",
    email: "kill_hunter@hunterassociation.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "byakuya",
    email: "bkuchiki@kuchikiclan.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "tanjiro_slayer",
    email: "tanjiro@demonslayer.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "eren_yeager",
    email: "eren@attackot.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
  {
    _id: new ObjectId(),
    username: "orihime",
    email: "inoue@ss.com",
    thoughts: [],
    friends: [],
    createdAt: new Date(getRandomDate()),
  },
];

const dbThoughtData = [
  {
    _id: new ObjectId(),
    thoughtText:
      "I’ll never go back on my word! That’s my ninja way! I will be the next Hokage!",
    username: "naruto_uzumaki",
    reactions: [] as {
      reactionId: ObjectId;
      reactionBody: string;
      username: string;
      createdAt: Date;
    }[],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 10)),
  },
  {
    _id: new ObjectId(),
    thoughtText: "I’m just a hero for fun. Sometimes, it’s boring. 😴",
    username: "saitama",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 5)),
  },
  {
    _id: new ObjectId(),
    thoughtText: `I'll do anything for my friends. I'll protect them no matter what!`,
    username: "killua",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
  {
    _id: new ObjectId(),
    thoughtText:
      "The lesson here is that I’m stronger than you. It’s simple, really.",
    username: "levi_ackerman",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    _id: new ObjectId(),
    thoughtText:
      "If a miracle only happens once, then what is it called the second time?",
    username: "ichigo-kurosaki",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    _id: new ObjectId(),
    thoughtText:
      "A bond is like a pointillist painting. In order to see it in its entirety, you have to take a step back.",
    username: "byakuya",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    _id: new ObjectId(),
    thoughtText:
      "This bamboo muzzle makes it impossible to speak, but I can still post my thoughts here!",
    username: "nezuko",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    _id: new ObjectId(),
    thoughtText: "Love is the most twisted curse of all.",
    username: "satoru",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    _id: new ObjectId(),
    thoughtText: "I am the god of the new world. I am Kira.",
    username: "light_yagami",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
  {
    _id: new ObjectId(),
    thoughtText: "I'd do anything for him!",
    username: "orihime",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
  {
    _id: new ObjectId(),
    thoughtText: "I'll get them all!",
    username: "eren_yeager",
    reactions: [],
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
];

const dbReactionData = [
  {
    reactionId: new ObjectId(),
    reactionBody: "Believe it!",
    username: "naruto_uzumaki",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "Awesome!",
    username: "killua",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "I can’t believe what I just saw!",
    username: "ichigo-kurosaki",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "A true hero doesn’t need to prove himself.",
    username: "levi_ackerman",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "I am here!",
    username: "saitama",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "I can see the ending!",
    username: "nezuko",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "I am justice!",
    username: "light_yagami",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: `I know what's going to happen next.`,
    username: "satoru",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "I am the most powerful!",
    username: "byakuya",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "I am the fastest!",
    username: "saitama",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "I am hokage!",
    username: "naruto_uzumaki",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "You're the best!",
    username: "orihime",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "YES!",
    username: "eren_yeager",
    createdAt: new Date(getRandomDate()),
  },
  {
    reactionId: new ObjectId(),
    reactionBody: "I am a hero!",
    username: "saitama",
    createdAt: new Date(getRandomDate()),
  },
];

// get a random item given an array
export const getRandom = (arr: any[]) => {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};

// get a random user
export const getRandomUser = () => getRandom(dbUserData);

// add random friends to a user
export const addRandomFriends = (user: { _id: ObjectId; friends: ObjectId[] }, numFriends: number) => {
  for (let i = 0; i < numFriends; i++) {
    const randomUser = getRandomUser();
    if (randomUser._id !== user._id && !user.friends.includes(randomUser._id)) {
      user.friends.push(randomUser._id);
    }
  }
};

// add 3 random friends to each user
const numFriendsToAdd = 3; 
dbUserData.forEach(user => addRandomFriends(user, numFriendsToAdd));

const getRandomReaction = (thoughtUsername: string) => {
  const filteredReactions = dbReactionData.filter(reaction => reaction.username !== thoughtUsername);
  return getRandom(filteredReactions);
};

// add reactions to thoughts making sure they are not from the same user
dbThoughtData.forEach(thought => {
  const randomReaction = getRandomReaction(thought.username);
  thought.reactions.push(randomReaction);
});

// log the data in table form
console.table(
  dbUserData.map((user) => ({
    ...user,
    createdAt: user.createdAt
      ? moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss a")
      : null,
  }))
);
console.table(
  dbThoughtData.map((thought) => ({
    ...thought,
    createdAt: moment(thought.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
    reactions: thought.reactions.map((reaction) => ({
      ...reaction,
      createdAt: moment(reaction.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
    })),
  }))
);

console.table(dbReactionData);
console.info("Seeding Complete! 🌱");

export { dbUserData, dbThoughtData, dbReactionData };
