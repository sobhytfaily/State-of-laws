export interface Candidate {
    id: string;
    name: string;
    role: string;
    image: string;
    details: string;
    email?: string;
    phone?: string;
    social?: {
        twitter?: string;
        facebook?: string;
        instagram?: string;
    };
}

export interface CandidateResponse {
    candidates: Candidate[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}