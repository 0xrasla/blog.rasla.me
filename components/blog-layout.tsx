import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import Link from "next/link";
import type React from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
  frontmatter: {
    title: string;
    date: string;
    readTime: string;
    tags: string[];
    author: string;
    excerpt: string;
  };
}

export function BlogLayout({ children, frontmatter }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            {frontmatter.title}
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            {frontmatter.excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{frontmatter.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(frontmatter.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{frontmatter.readTime}</span>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-slate-900 dark:prose-a:text-slate-100 prose-a:no-underline hover:prose-a:underline prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-900 dark:prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-700 max-w-none">
            {children}
          </div>
        </article>

        {/* Article Footer */}
        <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                AC
              </div>
              <div>
                <h3 className="text-xl font-bold">{frontmatter.author}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Full-stack Developer & Tech Enthusiast
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Passionate about building scalable web applications and sharing
              knowledge with the developer community. Always exploring new
              technologies and best practices in software development.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
