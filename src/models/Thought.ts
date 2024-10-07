import { Schema, model } from 'mongoose';
import Reaction from './Reaction.js';

interface IThought {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: Response[];
}

const thoughtSchema = new Schema<IThought>(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal: Date) => createdAtVal,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
}
);

// virtual for reaction count
thoughtSchema
.virtual('reactionCount')
.get(function(this: IThought) {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

export default Thought;