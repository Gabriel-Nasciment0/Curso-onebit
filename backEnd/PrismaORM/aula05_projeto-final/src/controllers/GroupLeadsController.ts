import { Handler } from "express"
import { prisma } from "../database"
import { HttpError } from "../errors/HttpError"
import {
    GroupLeadsParamsSchema,
    GroupLeadParamsSchema,
    AddLeadToGroupRequestSchema,
} from "./schemas/GroupsRequestSchema"

export class GroupLeadsController {
    // GET /groups/:groupId/leads
    index: Handler = async (req, res, next) => {
        try {
            const { groupId } = GroupLeadsParamsSchema.parse(req.params)

            const group = await prisma.group.findUnique({
                where: { id: groupId },
                include: {
                    leads: true,
                },
            })

            if (!group) {
                throw new HttpError(404, "grupo não encontrado")
            }

            res.json(group.leads)
        } catch (error) {
            next(error)
        }
    }

    // POST /groups/:groupId/leads
    create: Handler = async (req, res, next) => {
        try {
            const { groupId } = GroupLeadsParamsSchema.parse(req.params)
            const { leadId } = AddLeadToGroupRequestSchema.parse(req.body)

            const group = await prisma.group.findUnique({
                where: { id: groupId },
            })

            if (!group) {
                throw new HttpError(404, "grupo não encontrado")
            }

            const lead = await prisma.lead.findUnique({
                where: { id: leadId },
            })

            if (!lead) {
                throw new HttpError(404, "lead não encontrado")
            }

            const existingRelation = await prisma.group.findFirst({
                where: {
                    id: groupId,
                    leads: {
                        some: { id: leadId },
                    },
                },
            })

            if (existingRelation) {
                throw new HttpError(409, "lead já pertence a este grupo")
            }

            await prisma.group.update({
                where: { id: groupId },
                data: {
                    leads: {
                        connect: { id: leadId },
                    },
                },
            })

            res.status(201).json({
                message: "lead adicionado ao grupo com sucesso",
            })
        } catch (error) {
            next(error)
        }
    }

    // DELETE /groups/:groupId/leads/:leadId
    delete: Handler = async (req, res, next) => {
        try {
            const { groupId, leadId } = GroupLeadParamsSchema.parse(req.params)

            const group = await prisma.group.findUnique({
                where: { id: groupId },
            })

            if (!group) {
                throw new HttpError(404, "grupo não encontrado")
            }

            const lead = await prisma.lead.findUnique({
                where: { id: leadId },
            })

            if (!lead) {
                throw new HttpError(404, "lead não encontrado")
            }

            const existingRelation = await prisma.group.findFirst({
                where: {
                    id: groupId,
                    leads: {
                        some: { id: leadId },
                    },
                },
            })

            if (!existingRelation) {
                throw new HttpError(404, "lead não pertence a este grupo")
            }

            await prisma.group.update({
                where: { id: groupId },
                data: {
                    leads: {
                        disconnect: { id: leadId },
                    },
                },
            })

            res.status(204).send()
        } catch (error) {
            next(error)
        }
    }
}
