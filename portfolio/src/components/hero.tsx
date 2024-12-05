export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Mason D
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
        Full-Stack Developer specializing in Next.js, Vercel, and Supabase
      </p>
      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/MasonD-007"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
        >
          GitHub
        </a>
        <a
          href="#projects"
          className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
        >
          View Projects
        </a>
      </div>
    </section>
  )
}