export type DLIStatus = 'Verified' | 'Pending' | 'Risk' | 'Mismatch';
export type ComplianceStatus = 'Compliant' | 'Partial' | 'Non-compliant' | 'Critical';

export interface City {
  id: string;
  name: string;
  isPPP: boolean;
  dliProgress: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  status: DLIStatus;
  population: string;
  region: string;
}

export interface DLI {
  id: number;
  title: string;
  description: string;
  verificationMethod: string;
  evidenceSources: string[];
  fieldVerification: boolean;
  status: DLIStatus;
  riskLevel: 'Low' | 'Medium' | 'High';
  icon: string;
}

export interface MethodologyStep {
  id: number;
  title: string;
  description: string;
  details: string[];
}

export interface FieldRecord {
  id: string;
  cityName: string;
  inspector: string;
  timestamp: string;
  gps: string;
  status: DLIStatus;
  checklist: { item: string; verified: boolean }[];
}

export interface TeamMember {
  role: string;
  focus: string;
  members: string[];
}
