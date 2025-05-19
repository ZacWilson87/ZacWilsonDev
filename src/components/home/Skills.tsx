const skillsData = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "PHP", level: 80 },
  { name: "GO", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Vue", level: 65 },
];

const Skills = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-heading">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-card rounded-lg p-3 animated-gradient-border h-auto"
            >
              <h3 className="text-xl font-medium pb-4">{skill.name}</h3>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-portfolio-green to-portfolio-pink h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-muted-foreground my-2">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
