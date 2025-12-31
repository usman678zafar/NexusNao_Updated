import dbConnect from './lib/mongodb';
import Article from './lib/models/Article';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const sampleArticles = [
    {
        title: "The Future of Digital Engineering in 2024",
        slug: "future-of-digital-engineering-2024",
        description: "Explore the emerging trends in software development, from AI-driven coding to the rise of decentralized architectures.",
        content: "The landscape of digital engineering is evolving at an unprecedented pace. As we move further into 2024, several key trends are shaping the way we build and deploy software...",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        category: "Technology",
        author: "Alex Rivera",
        readingTime: "6 min read",
        featured: true,
    },
    {
        title: "Mastering UI/UX: Beyond Just Visuals",
        slug: "mastering-ui-ux-design",
        description: "Learn how to create user experiences that are not only beautiful but also intuitive, accessible, and conversion-focused.",
        content: "Design is not just what it looks like and feels like. Design is how it works. In this deep dive, we explore the psychological principles behind effective user interfaces...",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
        category: "Design",
        author: "Elena Vance",
        readingTime: "8 min read",
        featured: false,
    },
    {
        title: "AI in E-commerce: Driving Personalization at Scale",
        slug: "ai-in-ecommerce-personalization",
        description: "Discover how machine learning algorithms are transforming the online shopping experience through hyper-personalization.",
        content: "The modern consumer expects a personalized shopping journey. AI is making this possible by analyzing vast amounts of data to provide real-time recommendations...",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
        category: "AI",
        author: "Marcus Chen",
        readingTime: "5 min read",
        featured: false,
    }
];

async function seed() {
    try {
        console.log('Connecting to database...');
        // Note: This script is intended to be run in a way that process.env.MONGODB_URI is available
        await dbConnect();

        console.log('Clearing existing articles...');
        await Article.deleteMany({});

        console.log('Inserting sample articles...');
        await Article.insertMany(sampleArticles);

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seed();
