import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHTML";
import PostHeader from "@/app/components/post-header";
import PostBody from "@/app/components/post-body";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function WorkPost(props: Params) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
        <PostHeader context={post.contextShort} title={post.title} date={post.date} />
        <PostBody content={content} />
    </main>
  )
}