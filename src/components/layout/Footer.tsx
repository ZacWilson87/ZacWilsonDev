import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-portfolio-black border-t border-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold gradient-heading">
              ZacWilsonDev
            </Link>
            <p className="mt-2 text-muted-foreground text-sm max-w-md">
              Crafting digital experiences with clean code and creative
              solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
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
            <p className="text-sm text-muted-foreground">
              © {currentYear} ZacWilsonDev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
