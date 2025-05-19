import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import engagedImage from '@/assets/images/Engaged.png';

const About = () => {
  useEffect(() => {
    document.title = "About Me | ZacWilsonDev";
  }, []);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 gradient-heading text-center">
            About Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden animated-gradient-border mb-6">
                <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                  <img
                    src={engagedImage}
                    alt="Zac"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-portfolio-green">
                    Location
                  </h3>
                  <p className="text-muted-foreground">Fayetteville, AR</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-portfolio-green">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    zilson1987+dev@gmail.com
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-portfolio-green">
                    Connect
                  </h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="https://github.com/ZacWilson87"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-portfolio-green transition-colors flex items-center"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/zachery-wilson-792bb01b5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-portfolio-pink transition-colors flex items-center"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      LinkedIn
                    </a>
                    <a
                      href="https://seedgeni.us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-portfolio-green transition-colors"
                    >
                      SeedGenius
                    </a>
                  </div>
                </div>

                <Button className="w-full bg-portfolio-green text-black hover:bg-portfolio-green/80 mt-4">
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="md:col-span-2">
              <Card className="bg-card border border-muted p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-portfolio-green">
                  My Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hi, I'm Zac Wilson — a passionate software engineer with over 5 years of experience building full-stack web applications and integrating cutting-edge technologies to solve real-world problems.
                  </p>
                  <p>
                    My journey into tech began at 29, when I enrolled in LaunchCode to learn programming fundamentals. That leap kickstarted my career. Shortly after completing the program, I was hired by Affirma, and I've been growing ever since.
                  </p>
                  <p>
                    I specialize in developing scalable, efficient, and user-focused software. From front-end interfaces to backend APIs, I enjoy working across the stack to build solutions that are both powerful and intuitive. Lately, I've been diving deeper into AI integrations—bringing intelligent features into the products I help build.
                  </p>
                  <p>
                    I'm always learning, always evolving, and always looking for ways to create technology that truly serves its users.
                  </p>
                  <p>
                    When I'm not coding, I'm probably hanging out with my wife, traveling, enjoying food & drinks, or working on my side projects.
                  </p>
                </div>
              </Card>

              <Card className="bg-card border border-muted p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-portfolio-pink">
                  Work Experience
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-portfolio-pink pl-4 pb-6">
                    <h3 className="text-xl font-medium">
                      Founder / Solutions Architect
                    </h3>
                    <p className="text-portfolio-pink mb-2">
                      SeedGenius | 2025 - Present
                    </p>
                    <p className="text-muted-foreground">
                      SaaS platform that leverages CLI tools and AI to intelligently generate realistic seed data for startups, product demos, testing environments, and more. The goal is to streamline development workflows and accelerate product iteration. I contribute across the stack, from architecting core features to refining the developer experience for our CLI and API tools.
                    </p>
                  </div>
                  <div className="border-l-2 border-portfolio-pink pl-4 pb-6">
                    <h3 className="text-xl font-medium">
                      Software Engineer III / Solutions Engineer
                    </h3>
                    <p className="text-portfolio-pink mb-2">
                      Meta | 2023 - Present
                    </p>
                    <p className="text-muted-foreground">
                      build and maintain internal tools that support the workflows of full-time employees. I focus on improving internal processes and enhancing the employee experience through scalable, reliable software solutions. I actively collaborate with teams across the organization to design and implement integrations that streamline operations and enable more efficient cross-functional collaboration.
                    </p>
                  </div>
                  <div className="border-l-2 border-portfolio-pink pl-4 pb-6">
                    <h3 className="text-xl font-medium">
                      Software Engineer III / Developer Mangager / Lead Developer
                    </h3>
                    <p className="text-portfolio-pink mb-2">
                      Affirma Consulting | 2021 - Present
                    </p>
                    <p className="text-muted-foreground">
                      Work with a range of clients to design and develop custom software solutions tailored to their needs. Beyond writing code, I've taken on multiple roles—leading development teams, mentoring junior engineers, conducting code reviews, contributing to technical blogs, and even supporting sales efforts by helping communicate technical value to prospective clients. I thrive in dynamic environments where I can wear many hats and deliver impact across both technical and strategic areas.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border border-muted p-6">
                <h2 className="text-2xl font-bold mb-4 text-portfolio-green">
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-portfolio-green pl-4 pb-6">
                    <h3 className="text-xl font-medium">
                      LaunchCode
                    </h3>
                    <p className="text-portfolio-green mb-2">
                      Remote | 2020-2021
                    </p>
                    <p className="text-muted-foreground">
                      Full Stack Development
                    </p>
                  </div>

                  <div className="border-l-2 border-portfolio-green pl-4">
                    <h3 className="text-xl font-medium">
                      Associate of Applied Science in Graphic Design
                    </h3>
                    <p className="text-portfolio-green mb-2">
                      Art Institutes International, MN | 2006-2008
                    </p>
                    <p className="text-muted-foreground">
                      Graduated with A.A.S in Graphic Design, with a focus on
                      product design and branding.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
