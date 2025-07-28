import { BlogLayout } from "@/components/blog-layout";
import { notFound } from "next/navigation";

const blogPosts = {
  "getting-started-with-nextjs-15": {
    title: "Getting Started with Next.js 15: What's New and Exciting",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    author: "Alex Chen",
    excerpt:
      "Explore the latest features in Next.js 15, including improved performance, new APIs, and enhanced developer experience.",
    content: `
# Introduction

Next.js 15 brings a host of exciting new features and improvements that make building React applications even more enjoyable and efficient. In this comprehensive guide, we'll explore the key updates and how they can benefit your development workflow.

## What's New in Next.js 15

### Enhanced Performance

The latest version introduces several performance optimizations:

- **Improved bundling**: Faster build times with optimized webpack configuration
- **Better tree shaking**: More efficient dead code elimination
- **Enhanced caching**: Smarter caching strategies for better runtime performance

### New APIs and Features

#### Server Components Improvements

Server Components have received significant updates:

\`\`\`jsx
// Enhanced server component with better streaming
export default async function BlogPost({ params }) {
  const post = await fetchPost(params.slug)
  
  return (
    <article>
      <h1>{post.title}</h1>
      <Suspense fallback={<PostSkeleton />}>
        <PostContent content={post.content} />
      </Suspense>
    </article>
  )
}
\`\`\`

#### Improved App Router

The App Router continues to evolve with new capabilities:

- **Parallel routes**: Handle multiple UI states simultaneously
- **Intercepting routes**: Create modal-like experiences
- **Enhanced layouts**: More flexible layout compositions

### Developer Experience Enhancements

Next.js 15 focuses heavily on improving the developer experience:

1. **Better error messages**: More descriptive and actionable error reporting
2. **Enhanced debugging**: Improved source maps and debugging tools
3. **Faster hot reload**: Quicker feedback during development

## Getting Started

To start using Next.js 15, simply create a new project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Migration Guide

If you're upgrading from a previous version, here are the key steps:

### Update Dependencies

\`\`\`json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
\`\`\`

### Configuration Changes

Some configuration options have been updated. Check your \`next.config.js\`:

\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // New experimental features
    serverComponentsExternalPackages: ['some-package']
  }
}

module.exports = nextConfig
\`\`\`

## Best Practices

When working with Next.js 15, keep these best practices in mind:

- **Use Server Components by default**: They provide better performance and SEO
- **Implement proper loading states**: Use Suspense boundaries effectively
- **Optimize images**: Leverage the built-in Image component
- **Follow the App Router patterns**: Embrace the new routing conventions

## Conclusion

Next.js 15 represents a significant step forward in React framework evolution. With its focus on performance, developer experience, and modern web standards, it's an excellent choice for building production-ready applications.

The improvements in Server Components, App Router, and overall performance make it easier than ever to build fast, scalable web applications. Whether you're starting a new project or considering an upgrade, Next.js 15 offers compelling reasons to make the switch.

---

*What are your thoughts on Next.js 15? Have you tried any of the new features? Let me know in the comments below!*
    `,
  },
  "mastering-typescript-advanced-patterns": {
    title: "Mastering TypeScript: Advanced Patterns for Better Code",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    author: "Alex Chen",
    excerpt:
      "Deep dive into advanced TypeScript patterns including conditional types, mapped types, and template literal types.",
    content: `
# Advanced TypeScript Patterns

TypeScript has evolved into a powerful type system that goes far beyond basic type annotations. In this deep dive, we'll explore advanced patterns that can help you write more robust and maintainable code.

## Conditional Types

Conditional types allow you to create types that depend on a condition:

\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T }

// Usage
type StringResponse = ApiResponse<string>  // { message: string }
type NumberResponse = ApiResponse<number>  // { data: number }
\`\`\`

### Practical Example: Safe Array Access

\`\`\`typescript
type SafeGet<T, K> = K extends keyof T ? T[K] : never

interface User {
  id: number
  name: string
  email: string
}

type UserName = SafeGet<User, 'name'>    // string
type Invalid = SafeGet<User, 'invalid'>  // never
\`\`\`

## Mapped Types

Mapped types let you create new types by transforming properties of existing types:

\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P]
}

type Required<T> = {
  [P in keyof T]-?: T[P]
}

type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
\`\`\`

### Custom Mapped Types

\`\`\`typescript
type Stringify<T> = {
  [K in keyof T]: string
}

type Promisify<T> = {
  [K in keyof T]: Promise<T[K]>
}

interface User {
  id: number
  name: string
  active: boolean
}

type StringUser = Stringify<User>
// { id: string; name: string; active: string }

type AsyncUser = Promisify<User>
// { id: Promise<number>; name: Promise<string>; active: Promise<boolean> }
\`\`\`

## Template Literal Types

Template literal types enable powerful string manipulation at the type level:

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`

type ClickEvent = EventName<'click'>  // 'onClick'
type HoverEvent = EventName<'hover'>  // 'onHover'
\`\`\`

### Building a Type-Safe Event System

\`\`\`typescript
type EventMap = {
  click: { x: number; y: number }
  hover: { element: HTMLElement }
  scroll: { top: number; left: number }
}

type EventHandler<T extends keyof EventMap> = (
  event: EventMap[T]
) => void

type EventHandlers = {
  [K in keyof EventMap as \`on\${Capitalize<string & K>}\`]?: EventHandler<K>
}

// Result:
// {
//   onClick?: (event: { x: number; y: number }) => void
//   onHover?: (event: { element: HTMLElement }) => void
//   onScroll?: (event: { top: number; left: number }) => void
// }
\`\`\`

## Utility Types in Action

### Deep Readonly

\`\`\`typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object 
    ? DeepReadonly<T[P]> 
    : T[P]
}

interface Config {
  database: {
    host: string
    port: number
    credentials: {
      username: string
      password: string
    }
  }
}

type ReadonlyConfig = DeepReadonly<Config>
// All properties and nested properties are readonly
\`\`\`

### Type-Safe Object Paths

\`\`\`typescript
type Paths<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? K | \`\${K}.\${Paths<T[K]>}\`
          : K
        : never
    }[keyof T]
  : never

type UserPaths = Paths<User>
// 'id' | 'name' | 'email' | 'profile' | 'profile.bio' | 'profile.avatar'
\`\`\`

## Advanced Function Types

### Function Overloads with Conditional Types

\`\`\`typescript
interface Database {
  get<T extends 'user'>(type: T, id: string): Promise<User>
  get<T extends 'post'>(type: T, id: string): Promise<Post>
  get<T extends 'comment'>(type: T, id: string): Promise<Comment>
}

// Or using conditional types:
type GetReturnType<T> = 
  T extends 'user' ? User :
  T extends 'post' ? Post :
  T extends 'comment' ? Comment :
  never

interface Database {
  get<T extends 'user' | 'post' | 'comment'>(
    type: T, 
    id: string
  ): Promise<GetReturnType<T>>
}
\`\`\`

## Best Practices

1. **Start Simple**: Don't over-engineer types from the beginning
2. **Use Type Guards**: Combine runtime checks with type narrowing
3. **Leverage Utility Types**: Use built-in utilities before creating custom ones
4. **Document Complex Types**: Add comments for complex type logic
5. **Test Your Types**: Use type-level tests to ensure correctness

## Conclusion

Advanced TypeScript patterns unlock powerful capabilities for creating type-safe, maintainable applications. While these patterns might seem complex at first, they become invaluable tools for building robust software systems.

The key is to gradually incorporate these patterns into your codebase, starting with simpler use cases and building up to more complex scenarios as your understanding grows.

---

*Have you used any of these advanced TypeScript patterns in your projects? Share your experiences in the comments!*
    `,
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <BlogLayout frontmatter={post}>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.replace(/\n/g, "<br />"),
        }}
      />
    </BlogLayout>
  );
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
