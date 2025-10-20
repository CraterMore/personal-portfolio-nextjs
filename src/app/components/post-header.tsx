export default function PostHeader(props: { context: string, title: string, date: string, tags: string[], button?: { text: string, link: string } }) {
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
        {props.button && (
          <div className="flex justify-center mb-4">
            <a className="btn-primary mt-2 transition ease-in-out duration-150 hover:-translate-y-1 h-fit" href={props.button.link}>{props.button.text}</a>
          </div>
        )}
    </header>
  );
}
