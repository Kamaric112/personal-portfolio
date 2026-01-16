import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Code } from "lucide-react";

import { Skill } from "@/lib/data";

interface SortableSkillProps extends Pick<Skill, "id" | "name"> {
  icon: React.ReactNode;
}

export function SortableSkill({ id, name, icon }: SortableSkillProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    cursor: "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="animate-on-scroll flex flex-col items-center p-4 rounded-lg bg-white/20 shadow-sm hover:shadow-md touch-none"
    >
      <div className="mb-3">
        {icon || <Code aria-hidden="true" className="h-8 w-8 text-primary" />}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
