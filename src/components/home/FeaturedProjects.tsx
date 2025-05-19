import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const ProjectsData = [
  {
    id: 1,
    title: "SeedGenius",
    description:
      "CLI tool for generating seed data for your Postgres database.",
    image: "/SeedGeniusLogo.png",
    tags: ["Next.js", "Go", "PostgreSQL", "TypeScript"],
    category: "AI/CLI",
    demoLink: "https://seedgeni.us",
    codeLink: "",
  },
  {
    id: 2,
    title: "AI Tarot Card Reader/Card Generator",
    description:
      "A tarot card reader and card generator built with Go and React.",
    image: "/theChariot.png",
    tags: ["Go", "React", "Taildwind", "PostgreSQL"],
    category: "AI/Web",
    demoLink: "",
    codeLink: "https://github.com/ZacWilson87/TarotGenBackend",
  },
  {
    id: 3,
    title: "Petty Medical",
    description:
      "A Website for a medical practice based out of Northwest Arkansas.",
    image: "/Skin_Peel2.webp",
    tags: ["Vue", "TypeScript", "Vuetify"],
    category: "Web",
    demoLink: "https://pettymedical.com",
    codeLink: "",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold gradient-heading">
            Featured Projects
          </h2>
          <Button
            asChild
            variant="outline"
            className="border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10"
          >
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsData.map((project) => (
            <Card
              key={project.id}
              className="bg-card border border-muted hover:border-portfolio-green/50 transition-colors"
            >
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-muted text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-portfolio-green hover:text-portfolio-green/80 hover:bg-muted"
                >
                  {project.demoLink != "" && <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site
                  </a>}
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-portfolio-pink hover:text-portfolio-pink/80 hover:bg-muted"
                >
                  {project.codeLink != "" &&
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


