"use client";
import Header from "@/src/component/Header";
import Layout from "@/src/component/Layout";
import Main from "@/src/component/Main";

import useBlogItems from "@/src/utilis/hooks/useBlogItems";
import { useEffect } from "react";

export default function Home() {
  const { getBlogItems, isLoading, error } = useBlogItems();

  useEffect(() => {
    getBlogItems();
  }, [getBlogItems]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Layout>
        <Header />
        <Main />
      </Layout>
    </div>
  );
}
