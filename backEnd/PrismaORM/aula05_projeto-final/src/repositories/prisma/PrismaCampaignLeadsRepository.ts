import { LeadCampaign, LeadCampaignStatus, Prisma } from "@prisma/client"
import { prisma } from "../../database"
import {
    CampaignLeadWhereParams,
    CampaignLeadsRepository,
    FindCampaignLeadsParams,
} from "../CampaignLeadsRepository"

function buildWhere(where: CampaignLeadWhereParams): Prisma.LeadWhereInput {
    return {
        name: where.name
            ? { contains: where.name, mode: "insensitive" }
            : undefined,
        campaigns: {
            some: {
                campaignId: where.campaignId,
                status: where.status,
            },
        },
    }
}

export class PrismaCampaignLeadsRepository
    implements CampaignLeadsRepository
{
    find(params: FindCampaignLeadsParams) {
        return prisma.lead.findMany({
            where: buildWhere(params.where),
            orderBy: {
                [params.sortBy ?? "name"]: params.order ?? "asc",
            },
            skip: params.offset,
            take: params.limit,
            include: {
                campaigns: {
                    select: {
                        campaignId: true,
                        leadId: true,
                        status: true,
                    },
                },
            },
        })
    }

    count(where: CampaignLeadWhereParams): Promise<number> {
        return prisma.lead.count({
            where: buildWhere(where),
        })
    }

    addLead(
        campaignId: number,
        leadId: number,
        status?: LeadCampaignStatus,
    ): Promise<LeadCampaign> {
        return prisma.leadCampaign.create({
            data: { campaignId, leadId, status },
        })
    }

    updateLeadStatus(
        campaignId: number,
        leadId: number,
        status: LeadCampaignStatus,
    ): Promise<LeadCampaign> {
        return prisma.leadCampaign.update({
            data: { status },
            where: {
                leadId_campaignId: { campaignId, leadId },
            },
        })
    }

    removeLead(campaignId: number, leadId: number): Promise<LeadCampaign> {
        return prisma.leadCampaign.delete({
            where: {
                leadId_campaignId: { campaignId, leadId },
            },
        })
    }
}
