import { LeadCampaign, LeadCampaignStatus, Prisma } from "@prisma/client"

export type CampaignLead = Prisma.LeadGetPayload<{
    include: {
        campaigns: {
            select: {
                campaignId: true
                leadId: true
                status: true
            }
        }
    }
}>

export interface CampaignLeadWhereParams {
    campaignId: number
    name?: string
    status?: LeadCampaignStatus
}

export interface FindCampaignLeadsParams {
    where: CampaignLeadWhereParams
    sortBy?: "name" | "createdAt"
    order?: "asc" | "desc"
    limit?: number
    offset?: number
}

export interface CampaignLeadsRepository {
    find: (params: FindCampaignLeadsParams) => Promise<CampaignLead[]>
    count: (where: CampaignLeadWhereParams) => Promise<number>
    addLead: (
        campaignId: number,
        leadId: number,
        status?: LeadCampaignStatus,
    ) => Promise<LeadCampaign>
    updateLeadStatus: (
        campaignId: number,
        leadId: number,
        status: LeadCampaignStatus,
    ) => Promise<LeadCampaign>
    removeLead: (campaignId: number, leadId: number) => Promise<LeadCampaign>
}
