import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsData } from "@/components/home/FeaturedProjects";


type Category = "all" | "web" | "mobile" | "ai";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [filteredProjects, setFilteredProjects] = useState(ProjectsData);

  useEffect(() => {
    document.title = "Projects | ZacWilsonDev";

    if (activeCategory === "all") {
      setFilteredProjects(ProjectsData);
    } else {
      setFilteredProjects(
        ProjectsData.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 gradient-heading text-center">
            My Projects
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Most of my professional work is under NDA or stored in private repositories, but this selection of side projects and freelance consulting work showcases the kind of solutions I build.
            From full-stack web apps to AI-powered tools and API integrations, each project reflects my focus on clean architecture, user experience, and real-world functionality. While the most code remains private, the results speak for themselves.
          </p>

          <Tabs
            defaultValue="all"
            className="w-full mb-12"
            onValueChange={(value) => setActiveCategory(value as Category)}
          >
            {/* <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="ai">AI/ML</TabsTrigger>
            </TabsList> */}

            <TabsContent value="all" className="mt-8">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="web" className="mt-8">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="mobile" className="mt-8">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="ai" className="mt-8">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

interface ProjectGridProps {
  projects: typeof ProjectsData;
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
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
                ViewSite
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
  );
};

export default Projects;
