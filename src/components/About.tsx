import React, { useEffect, useRef, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import {
  skills as initialSkills,
  experiences,
  education,
  skillsLearning as initialLearningSkills,
  certifications,
  Skill,
} from "@/lib/data";
import { SortableSkill } from "./SortableSkill";
import { cn } from "@/lib/utils";
import { Code, GripVertical } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaReact,
  FaVuejs,
  FaAws,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaJira,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSentry,
  SiAwslambda,
  SiElasticsearch,
  SiFastify,
} from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";

const colors = {
  vueGreen: "#41b883",
  reactCyan: "#00ffff",
  tsBlue: "#3178c6",
  nodeGreen: "#215732",
  awsOrange: "#ff9900",
  gitRed: "red",
} as const;

const skillIcons: Record<string, React.ReactNode> = {
  Vue: <FaVuejs color={colors.vueGreen} className="h-8 w-8 text-primary" />,
  React: <FaReact color={colors.reactCyan} className="h-8 w-8 text-primary" />,
  TypeScript: (
    <SiTypescript color={colors.tsBlue} className="h-8 w-8 text-primary" />
  ),
  "Node.js": (
    <FaNode color={colors.vueGreen} className="h-8 w-8 text-primary" />
  ),
  Database: <FaDatabase className="h-8 w-8 text-primary" />,
  AWS: <FaAws color={colors.awsOrange} className="h-8 w-8 text-primary" />,
  "AWS Serverless": (
    <SiAwslambda color={colors.awsOrange} className="h-8 w-8 text-primary" />
  ),
  Git: <FaGitAlt color={colors.gitRed} className="h-8 w-8 text-primary" />,
  Github: <FaGithub className="h-8 w-8 text-primary" />,
  Jira: <FaJira color={colors.tsBlue} className="h-8 w-8 text-primary" />,
  Sentry: (
    <SiSentry color={colors.awsOrange} className="h-8 w-8 text-primary" />
  ),
  "CI/CD": <FaCodeBranch className="h-8 w-8 text-primary" />,
  Agile: <VscOrganization className="h-8 w-8 text-primary" />,
};

const skillsLearningIcon: Record<string, React.ReactNode> = {
  Fastify: (
    <SiFastify color={colors.vueGreen} className="h-8 w-8 text-primary" />
  ),
  ElasticSearch: (
    <SiElasticsearch color={colors.vueGreen} className="h-8 w-8 text-primary" />
  ),
};

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(true);
  const tooltipTimerRef = useRef<NodeJS.Timeout>();
  const [skills, setSkills] = useState<Skill[]>(initialSkills);

  const showTooltipTemporarily = () => {
    setShowTooltip(true);
    if (tooltipTimerRef.current) {
      clearTimeout(tooltipTimerRef.current);
    }
    tooltipTimerRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (tooltipTimerRef.current) {
        clearTimeout(tooltipTimerRef.current);
      }
    };
  }, []);
  const [learningSkills, setLearningSkills] = useState<Skill[]>(
    initialLearningSkills
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const handleSkillsDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSkills((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        return newItems.map((item, index) => ({ ...item, order: index }));
      });
      if (window.navigator.vibrate) {
        window.navigator.vibrate(100);
      }
    }
  };

  const handleLearningSkillsDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setLearningSkills((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        return newItems.map((item, index) => ({ ...item, order: index }));
      });
      if (window.navigator.vibrate) {
        window.navigator.vibrate(100);
      }
    }
  };

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="experience" className="section bg-secondary/30">
      <div className="container-tight" ref={aboutRef}>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-semibold animate-on-scroll">
                Skills
              </h3>
              <TooltipProvider>
                <Tooltip open={showTooltip}>
                  <TooltipTrigger
                    onClick={showTooltipTemporarily}
                    onMouseEnter={showTooltipTemporarily}
                  >
                    <GripVertical
                      className={cn(
                        "h-4 w-4 transition-opacity duration-200 cursor-pointer",
                        showTooltip ? "text-primary" : ""
                      )}
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-primary text-primary-foreground"
                  >
                    <p>You can reorder the skills!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleSkillsDragEnd}
            >
              <SortableContext
                items={skills.map((skill) => skill.id)}
                strategy={rectSortingStrategy}
              >
                <div className="grid grid-cols-3 gap-6">
                  {skills.map((skill) => (
                    <SortableSkill
                      key={skill.id}
                      id={skill.id}
                      name={skill.name}
                      icon={skillIcons[skill.name]}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>

            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-semibold animate-on-scroll">
                Currently learning...
              </h3>
            </div>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleLearningSkillsDragEnd}
            >
              <SortableContext
                items={learningSkills.map((skill) => skill.id)}
                strategy={rectSortingStrategy}
              >
                <div className="grid grid-cols-3 gap-6">
                  {learningSkills.map((skill) => (
                    <SortableSkill
                      key={skill.id}
                      id={skill.id}
                      name={skill.name}
                      icon={skillsLearningIcon[skill.name]}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>

          {/* Rest of the component remains unchanged */}
          <div>
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6 animate-on-scroll">
                Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.company}
                    className={cn(
                      "relative pl-6 border-l-2 border-foreground/10 animate-on-scroll",
                      index === experiences.length - 1 ? "" : "pb-8"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 rounded-full bg-primary/70 border-2 border-white" />
                    <h4 className="font-semibold text-lg">{exp.position}</h4>
                    <p className="text-foreground/80 text-sm mb-1">
                      {exp.company}
                    </p>
                    <p className="text-foreground/60 text-xs mb-3">
                      {exp.period}
                    </p>
                    <div className="text-foreground/80 text-sm">
                      {exp.description.split("\n").map((item, i) => (
                        <div key={i} className="flex items-baseline mb-2">
                          <span className="w-2 h-2 rounded-full bg-primary/70 mr-2 mt-1.5 shrink-0" />
                          <p>{item.trim()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 animate-on-scroll">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.institution}
                    className="animate-on-scroll"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-foreground/80 text-sm">
                      {edu.institution}
                    </p>
                    <p className="text-foreground/60 text-xs">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6 animate-on-scroll">
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.name}
                    className="animate-on-scroll"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="font-semibold">{cert.degree}</h4>
                    <p className="text-foreground/80 text-sm">{cert.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
