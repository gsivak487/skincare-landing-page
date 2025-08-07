import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from '../types';

interface BlogSectionProps {
  title: string;
  subtitle: string;
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ title, subtitle, posts }) => {
  return (
    <section className="py-16 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;