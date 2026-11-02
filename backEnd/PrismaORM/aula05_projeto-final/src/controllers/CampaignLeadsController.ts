import { Handler } from "express"
import {
    AddLeadRequestSchema,
    GetCampaignLeadsRequestSchema,
    UpdateLeadStatusRequestSchema,
} from "./schemas/CampaignsRequestSchema"
import {
    CampaignLeadWhereParams,
    CampaignLeadsRepository,
} from "../repositories/CampaignLeadsRepository"

export class CampaignLeadsController {
    constructor(
        private readonly campaignLeadsRepository: CampaignLeadsRepository,
    ) {}

    getLeads: Handler = async (req, res, next) => {
        try {
            const campaignId = Number(req.params.campaignId)
            const query = GetCampaignLeadsRequestSchema.parse(req.query)
            const {
                page = "1",
                pageSize = "10",
                name,
                status,
                sortBy = "name",
                order = "asc",
            } = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const where: CampaignLeadWhereParams = {
                campaignId,
                name,
                status,
            }

            const leads = await this.campaignLeadsRepository.find({
                where,
                sortBy,
                order,
                offset: (pageNumber - 1) * pageSizeNumber,
                limit: pageSizeNumber,
            })

            const total = await this.campaignLeadsRepository.count(where)

            res.json({
                leads,
                meta: {
                    page: pageNumber,
                    pageSize: pageSizeNumber,
                    total,
                    totalPages: Math.ceil(total / pageSizeNumber),
                },
            })
        } catch (error) {
            next(error)
        }
    }

    addLead: Handler = async (req, res, next) => {
        try {
            const body = AddLeadRequestSchema.parse(req.body)
            await this.campaignLeadsRepository.addLead(
                Number(req.params.campaignId),
                body.leadId,
                body.status,
            )
            res.status(201).end()
        } catch (error) {
            next(error)
        }
    }

    updateLeadStatus: Handler = async (req, res, next) => {
        try {
            const body = UpdateLeadStatusRequestSchema.parse(req.body)
            const updatedLeadCampaign =
                await this.campaignLeadsRepository.updateLeadStatus(
                    Number(req.params.campaignId),
                    Number(req.params.leadId),
                    body.status,
                )
            res.json(updatedLeadCampaign)
        } catch (error) {
            next(error)
        }
    }

    removeLead: Handler = async (req, res, next) => {
        try {
            const removedLead =
                await this.campaignLeadsRepository.removeLead(
                    Number(req.params.campaignId),
                    Number(req.params.leadId),
                )
            res.json({ removedLead })
        } catch (error) {
            next(error)
        }
    }
}
