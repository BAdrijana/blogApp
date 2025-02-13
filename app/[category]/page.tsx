"use client";
import { useSelector } from "react-redux";
import { BlogItem, RootState } from "@/types/types";
import React, { useEffect } from "react";
import MainCard from "@/src/component/cards/MainCard";
import Layout from "@/src/component/Layout";

function CategoryPage() {
  const allBlogPosts = useSelector(
    (state: RootState) => state.blogItems.blogItems
  );
  const activeCategory = useSelector(
    (state: RootState) => state.blogItems.activeCategory
  );
  const posts = allBlogPosts.filter(
    (item: BlogItem) => item.category === activeCategory
  );
  return (
    <Layout>
      <div className="container w-full  ">
        <h1 className="capitalize text-xl font-semibold">{activeCategory}</h1>

        <div className="flex flex-wrap gap-4 items-stretch">
          {posts.length === 0 ? (
            <p>No posts found for this category.</p>
          ) : (
            posts.map((post: BlogItem) => (
              <MainCard
                key={post.id}
                id={post.id}
                category={post.category}
                imageUrl={post.coverImg}
                title={post.title}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CategoryPage;
