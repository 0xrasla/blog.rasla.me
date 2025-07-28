import { BlogCard } from "@/components/blog-card";
import { SearchBar } from "@/components/search-bar";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: What's New and Exciting",
    excerpt:
      "Explore the latest features in Next.js 15, including improved performance, new APIs, and enhanced developer experience.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    author: "Alex Chen",
  },
  {
    slug: "mastering-typescript-advanced-patterns",
    title: "Mastering TypeScript: Advanced Patterns for Better Code",
    excerpt:
      "Deep dive into advanced TypeScript patterns including conditional types, mapped types, and template literal types.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    author: "Alex Chen",
  },
  {
    slug: "building-scalable-apis-with-nodejs",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "Learn best practices for building robust, scalable APIs using Node.js, Express, and modern architectural patterns.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Node.js", "API", "Backend"],
    author: "Alex Chen",
  },
];

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent mb-4">
            Tech Insights
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Exploring the latest in web development, programming, and
            technology. Sharing insights, tutorials, and thoughts on building
            better software.
          </p>
          <SearchBar />
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            All Posts
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Get the latest posts delivered directly to your inbox. No spam,
              just quality content.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-700"
              />
              <button className="px-6 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
