export default function PostHeader(props: { context: string, title: string, date: string, tags: string[] }) {
  return (
    <header>
        <div className="flex flex-col items-center">
                <p className="md:max-w-lg text-lg italic text-center px-4 mb-3">{props.context}</p>
                <h1 className="font-heading font-bold text-4xl text-center leading-tight px-4 mb-1">
                    {props.title}</h1>
                <p className="md:max-w-lg text-xl text-center px-4 font-light mb-5">{props.date}</p>
        </div>
        <div className="w-full h-2 bg-accent"></div>
        {props.tags.length > 0 && (
          <p className="text-accent my-4 text-center">{props.tags.join(" · ")}</p>
        )}
    </header>
  );
}
