import mongoose, { Schema, Document } from 'mongoose';

export interface IArticle extends Document {
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    category: string;
    author: string;
    date: Date;
    readingTime: string;
    featured: boolean;
}

const ArticleSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    readingTime: { type: String, required: true },
    featured: { type: Boolean, default: false },
});

export default mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema);
