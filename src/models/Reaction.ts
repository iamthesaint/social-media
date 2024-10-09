import { Schema, Document, ObjectId, Types } from 'mongoose';
import moment from 'moment';

export interface IReaction extends Document {
    reactionId: ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date;
}

const reactionSchema = new Schema<IReaction>(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        // @ts-expect-error
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal: Date): string => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);


export default reactionSchema;