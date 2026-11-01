import { z } from "zod"

export const CreateGroupRequestSchema = z.object({
    name: z.string(),
    description: z.string(),
})

export const UpdateGroupRequestSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
})

// Validação dos parâmetros das rotas
export const GroupLeadsParamsSchema = z.object({
    groupId: z.coerce.number().int().positive(),
})

export const GroupLeadParamsSchema = z.object({
    groupId: z.coerce.number().int().positive(),
    leadId: z.coerce.number().int().positive(),
})

// Validação do corpo da requisição POST
export const AddLeadRequestSchema = z.object({
    leadId: z.coerce.number().int().positive(),
})
