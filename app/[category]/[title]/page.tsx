"use client";
import React from "react";
import Image from "next/image";
import Layout from "@/src/component/Layout";
import { useSelector } from "react-redux";
import { BlogItem } from "@/types/types";
import { RootState } from "@/types/types";

function BlogPostPage() {
  const activeBlogPost = useSelector(
    (state: RootState) => state.blogItems.activeBlogPost
  );
  const allBlogPosts = useSelector(
    (state: RootState) => state.blogItems.blogItems
  );

  const post = allBlogPosts.find(
    (item: BlogItem) => item.id === activeBlogPost
  );

  if (!post) {
    return (
      <Layout>
        <div className="container justify-center text-center mt-10">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <p>Please select a valid blog post.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container justify-center">
        <div className="relative w-full h-screen">
          <Image
            src={post.coverImg}
            alt="Fashion Model"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <h1 className="text-3xl font-bold mt-6">{post.title}</h1>

        <div className="blog-body mt-6">
          {post.body
            .split(
              /(\d+\.\s\*\*[^*]+\*\*|\*\*[^*]+\*\*:|\*\*[^*]+\*\*|\d+\.\s)/
            ) // Adjusted regex for bold with colon
            .filter(Boolean)
            .map((part: string, index: number) => {
              if (/^\d+\.\s\*\*[^*]+\*\*$/.test(part)) {
                // Numbered bold heading (e.g., '5. **Attach the Handles**')
                const [number, heading] = part.split(/\s\*\*/);
                return (
                  <h3
                    key={index}
                    className="font-bold text-xl text-gray-800 mt-4 mb-2"
                  >
                    {number} {heading.replace(/\*\*/g, "")}
                  </h3>
                );
              } else if (/^\*\*[^*]+\*\*:/.test(part)) {
                // Bold text followed by a colon (inline bold)
                return (
                  <p
                    key={index}
                    className="ml-4 text-gray-700 leading-relaxed mb-4"
                  >
                    <span className="font-bold">
                      {part.replace(/\*\*|\*|\:/g, "")}:
                    </span>
                  </p>
                );
              } else if (/^\*\*[^*]+\*\*$/.test(part)) {
                // Standalone bold headings without colon
                return (
                  <h3
                    key={index}
                    className="font-bold text-xl text-gray-800 mt-4 mb-2"
                  >
                    {part.replace(/\*\*/g, "")}
                  </h3>
                );
              } else if (/^\d+\.\s$/.test(part)) {
                // Just numbered list without heading
                return (
                  <p key={index} className="font-bold text-lg mt-6 mb-2">
                    {part}
                  </p>
                );
              } else {
                // Regular paragraph text
                return (
                  <p
                    key={index}
                    className="ml-4 text-gray-700 leading-relaxed mb-4"
                  >
                    {part}
                  </p>
                );
              }
            })}
        </div>
      </div>
    </Layout>
  );
}

export default BlogPostPage;
