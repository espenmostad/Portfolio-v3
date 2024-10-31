import { Key } from "react";
import { z } from "zod";

// Definerer et Zod-skjema for Habit
export const ProjectSchema = z.object({
  tittel: z.string(),
  url: z.string(),
  beskrivelse: z.string()  
});

// Definerer et Zod-skjema for å opprette en ny Habit
//export const ProjectCreateSchema = ProjectSchema.omit({ id: true });

// Definerer et Zod-skjema for en array av Habit
export const ProjectArraySchema = z.array(ProjectSchema);

// Oppdatert type-definisjon basert på Zod-skjemaet
export type Project = z.infer<typeof ProjectSchema>;

// Oppdatert type-definisjon basert på Zod-skjemaet
export type CreateProject = z.infer<typeof ProjectSchema>;

export type ExperienceProps = {
  id?: number;
  description: string;
}

export type ExperiencesProps = {
  description: string;
  id: Key | null | undefined;
  experiences : ExperienceProps[];
}

export type ProjectProps = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  isPublic: boolean;
  createdAt?: Date;
  publishedAt?: Date;
}