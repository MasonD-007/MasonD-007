'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Badge } from './ui/badge'
import { Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  link: string
}

export function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:scale-105 transition-transform duration-200">
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
