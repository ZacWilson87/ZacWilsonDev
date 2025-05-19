import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import meImage from '@/assets/images/me.png';

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Hello, I'm </span>
              <span className="gradient-heading">Zac Wilson</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6">
              Software Engineer / Full-Stack Developer
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              I build exceptional digital experiences with modern technologies.
              Specialized in creating robust software and web applications that solve
              real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-portfolio-green hover:bg-portfolio-green/80 text-black"
              >
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-portfolio-pink text-portfolio-pink hover:bg-portfolio-pink/10"
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-green to-portfolio-pink rounded-full blur-md opacity-75"></div>
              <div className="relative bg-portfolio-black rounded-full overflow-hidden border-2 border-muted h-64 w-64 md:h-80 md:w-80">
                {/* Replace with your profile image */}
                <div className="h-full w-full flex items-center justify-center text-6xl font-bold gradient-heading">
                  <img
                    src={meImage}
                    alt="Zac Wilson"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
