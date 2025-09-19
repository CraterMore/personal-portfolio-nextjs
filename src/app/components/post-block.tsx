import { Post } from "@/interfaces/post";

export default function PostBlock({ post }: { post: Post }) {
    const backgroundColor = post.category === "Programming" ? "bg-primary" : "bg-secondary";
    const backgroundColorGray = backgroundColor + "-gray";
    const backgroundImage = "bg-[url('" + post.coverImage + "')]";

  return (
    <a className={`group md:block ${backgroundColorGray} ${backgroundImage} bg-center md:bg-none bg-cover rounded-3xl overflow-clip border-4 border-text transition-shadow ease-linear hover:shadow-2xl duration-200`} href={`/work/${post.slug}`}>
        <img src={post.coverImage} className="hidden md:block h-48 w-full object-cover md:group-hover:saturate-150" alt={post.title}/>
        <div className={`flex flex-col px-3 py-3 gap-4 h-full md:bg-opacity-100 ${backgroundColorGray} bg-opacity-85`}>
            <div className={`${backgroundColor} rounded-lg border-2 border-r-text text-md font-bold font-heading w-fit px-2`}>
                {post.category}
            </div>
            <h2 className="font-heading font-bold text-2xl text-left leading-tight">
                {post.title}
            </h2>
            <p className="text-lg text-left -translate-y-2">{post.context}</p>
        </div>
    </a> 
  );
}
