import { Schema, model, Document } from 'mongoose';
import reactionSchema, { IReaction } from './Reaction.js';
import moment from 'moment';

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: IReaction[];
    reactionCount: number; // virtual property
}

const thoughtSchema = new Schema<IThought>(
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    // @ts-expect-error
    createdAt: {
        type: Date,
        default: Date.now,
        get: function(createdAtVal: Date): string {
            return moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a');
        },
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
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