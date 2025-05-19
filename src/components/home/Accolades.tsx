import { Trophy, Award, BadgeCheck, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Accolades = () => {
  const accolades = [
    {
      icon: <Trophy className="h-8 w-8 text-portfolio-green" />,
      title: "SeedGenius Founder",
      description: "Founder and Technical Lead of SeedGenius, a SaaS platform",
      link: "https://seedgeni.us",
      linkText: "Visit SeedGenius",
      linkIcon: <ExternalLink className="h-4 w-4 ml-1" />,
    },
    {
      icon: <Award className="h-8 w-8 text-portfolio-pink" />,
      title: "Fortune 500 Expert",
      description: "Delivered consulting services to multiple Fortune 500 companies",
      // link: "https://github.com/ZacWilson87",
      // linkText: "View GitHub Profile",
      // linkIcon: <Github className="h-4 w-4 ml-1" />,
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-portfolio-green" />,
      title: "Industry Recognition",
      description:
        "Trusted technology consultant with experience across diverse sectors including FAANG and Fortune 500 companies",
    },
  ];

  return (
    <section className="py-20 bg-portfolio-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Accolades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-green to-portfolio-pink mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accolades.map((accolade, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animated-gradient-border-accolade"
            >
              <div className="bg-card h-full p-6 rounded-lg flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-muted flex items-center justify-center">
                  {accolade.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{accolade.title}</h3>
                <p className="text-muted-foreground">{accolade.description}</p>

                {accolade.link && (
                  <a
                    href={accolade.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-portfolio-green hover:text-portfolio-green/80 transition-colors"
                  >
                    {accolade.linkText}
                    {accolade.linkIcon}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accolades;
