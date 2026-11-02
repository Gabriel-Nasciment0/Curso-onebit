import { prisma } from "../../database"
import {
    CampaignsRepository,
    CreateCampaignAttributes,
} from "../CampaignsRepository"

export class PrismaCampaignsRepository implements CampaignsRepository {
    find = async () => {
        return await prisma.campaign.findMany()
    }

    findById = async (id: number) => {
        return await prisma.campaign.findUnique({
            where: { id },
            include: {
                leads: {
                    include: {
                        lead: true,
                    },
                },
            },
        })
    }

    create = async (attributes: CreateCampaignAttributes) => {
        return await prisma.campaign.create({
            data: attributes,
        })
    }

    updateById = async (
        id: number,
        attributes: Partial<CreateCampaignAttributes>,
    ) => {
        return await prisma.campaign.update({
            where: { id },
            data: attributes,
        })
    }

    deleteById = async (id: number) => {
        return await prisma.campaign.delete({
            where: { id },
        })
    }
}
