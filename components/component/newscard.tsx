export function Newscard({ title, url, date }) {
  return (
    <div className="flex border border-black flex-col items-start gap-4 p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex flex-col md:flex-row gap-2 text-sm text-gray-500 max-w-[100%]">
        <a
          className="hover:underline hover:text-black"
          href={url}
        >
          <p className="max-w-[100%]">
          {url}
          </p>
          
        </a>
        <span>•</span>
        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
      </div>
      <p className="text-black font-normal">
        Explore the cutting-edge advancements shaping the future of web
        development, from AI-powered tools to the rise of WebAssembly. Discover
        how these innovations are transforming the way we build and deploy
        modern web applications.
      </p>
    </div>
  );
}