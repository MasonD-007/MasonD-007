import { ProjectCard } from './components/project-card'
import { Hero } from './components/hero'

export default function Home() {
  const projects = [
    {
      title: 'Customer Insight SaaS Platform',
      description: 'A platform for analyzing and visualizing customer data insights.',
      tech: ['Next.js', 'Supabase', 'Vercel'],
      image: '/project1.webp',
      link: 'https://github.com/yourusername/project1'
    },
    // Add more projects here
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  )
}