import { Technology } from "./technology"

export interface Project {
    id: number
    img: string
    title: string
    description: string
    technologies: Technology[]
}
