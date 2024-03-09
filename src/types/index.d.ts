import type { z } from "zod"

import type { projectSchema } from "../validations/project"

export type Project = z.infer<typeof projectSchema>

export type Portfolio = {
  skillSet: string[]
}
