import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon?: ReactNode;
}

export function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <div className="glass p-6 sm:p-8 rounded-2xl h-full flex flex-col min-h-[180px] sm:min-h-[200px] transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 border border-white/10">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        {icon && (
          <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-accent/20 text-xl sm:text-2xl shrink-0">
            {icon}
          </span>
        )}
        <h3 className="font-display-semibold text-lg sm:text-xl md:text-2xl text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            role="listitem"
            className="skill-tag inline-flex items-center text-sm sm:text-base font-medium px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-accent/15 text-accent border border-accent/20 hover:bg-accent/30 hover:border-accent/50 hover:scale-105 active:scale-100 transition-all duration-200 cursor-default"
            title={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
