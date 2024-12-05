'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  image: string
  link: string
}

export function ProjectCard({ title, description, tech, image, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:scale-105 transition-transform duration-200">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 hover:text-gray-400" />
          </a>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
