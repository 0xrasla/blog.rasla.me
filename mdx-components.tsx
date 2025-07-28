import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-slate-900 dark:text-slate-100">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-slate-900 dark:text-slate-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="text-slate-900 dark:text-slate-100 underline hover:no-underline font-medium"
      >
        {children}
      </Link>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg my-8"
        {...(props as ImageProps)}
      />
    ),
    code: ({ children }) => (
      <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto my-6 border border-slate-200 dark:border-slate-700">
        <code className="text-slate-100 text-sm">{children}</code>
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-slate-300 dark:border-slate-600 pl-4 my-6 italic text-slate-600 dark:text-slate-400">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ol>
    ),
    ...components,
  };
}
