export function Newscard({ title, url, date }) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <a
          className="hover:underline hover:text-gray-700 dark:hover:text-gray-300"
          href={url}
        >
          {url}
        </a>
        <span>•</span>
        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        Explore the cutting-edge advancements shaping the future of web
        development, from AI-powered tools to the rise of WebAssembly. Discover
        how these innovations are transforming the way we build and deploy
        modern web applications.
      </p>
    </div>
  );
}