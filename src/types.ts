export type HealthKey='adoption'|'engagement'|'value'|'support'|'stakeholders'|'contract'|'outcome';
export type HealthWeights=Record<HealthKey,number>;
export type Risk='Crítico'|'Risco'|'Atenção'|'Saudável';
export interface Account {id:string;name:string;segment:'Enterprise'|'Mid-market'|'SMB';plan:string;mrr:number;arr:number;startDate:string;renewalDate:string;contractedUsers:number;activeUsers:number;usage:number;adoption:number;adoptionTrend:number;tickets:number;ticketSeverity:'Baixa'|'Média'|'Alta'|'Crítica';resolutionHours:number;nps:number|null;lastContactDays:number;userRelation:boolean;managerRelation:boolean;decisionMakerRelation:boolean;components:Record<HealthKey,number>;health:number;risk:Risk;expansionPotential:number;expansionInProgress:boolean;stage:string;csm:string;nextAction:string|null;actionSla:string|null;confidence:number;history:number[];}
export interface RevenueMovement {accountId:string;openingMrr:number;churn:number;contraction:number;expansion:number;reactivation:number;}
export interface AutomationRule {id:string;name:string;status:'Simulada'|'Em teste'|'Pausada';description:string;owner:string;sla:string;channel:string;successMetric:string;}
