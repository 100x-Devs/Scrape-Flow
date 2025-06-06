import { z } from "zod";

export const createWorkflowSchema = z.object({
  name: z.string().max(50).min(1),
  description: z.string().max(80).optional(),
});

export type CreateWorkflowSchemaType = z.infer<typeof createWorkflowSchema>;
