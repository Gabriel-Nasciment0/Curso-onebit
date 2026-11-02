import { Handler } from "express"
import {
    CreateCampaignRequestSchema,
    UpdateCampaignRequestSchema,
} from "./schemas/CampaignsRequestSchema"
import { HttpError } from "../errors/HttpError"
import { CampaignsRepository } from "../repositories/CampaignsRepository"

export class CampaignsController {
    constructor(private readonly campaignsRepository: CampaignsRepository) {}

    index: Handler = async (req, res, next) => {
        const campaigns = await this.campaignsRepository.find()

        res.json(campaigns)
    }

    create: Handler = async (req, res, next) => {
        const body = CreateCampaignRequestSchema.parse(req.body)

        const newCampaign = await this.campaignsRepository.create(body)

        res.json(newCampaign)
    }

    show: Handler = async (req, res, next) => {
        const id = Number(req.params.id)

        const campaign = await this.campaignsRepository.findById(id)

        if (!campaign) {
            throw new HttpError(404, "campanha não encontrada")
        }

        res.json(campaign)
    }

    update: Handler = async (req, res, next) => {
        const id = Number(req.params.id)

        const body = UpdateCampaignRequestSchema.parse(req.body)

        const campaignExists = await this.campaignsRepository.findById(id)

        if (!campaignExists) {
            throw new HttpError(404, "campanha não encontrada")
        }

        const updatedCampaign = await this.campaignsRepository.updateById(
            id,
            body,
        )

        res.json(updatedCampaign)
    }

    delete: Handler = async (req, res, next) => {
        const id = Number(req.params.id)

        const campaignExists = await this.campaignsRepository.findById(id)

        if (!campaignExists) {
            throw new HttpError(404, "campanha não encontrada")
        }

        const deletedCampaign = await this.campaignsRepository.deleteById(id)

        res.json({ deletedCampaign })
    }
}
