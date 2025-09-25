import { Candidate, CandidateResponse } from '../types/candidate';

// This function will be replaced with actual CMS fetching later
export async function fetchCandidates(page: number = 1, pageSize: number = 4): Promise<CandidateResponse> {
    // Mock data - replace with CMS API call
    const mockCandidates: Candidate[] = [
        {
            id: "1",
            name: "Robert Gates",
            role: "Director",
            image: "assets/images/team/team-v3-img1.jpg",
            details: "/team-details",
            email: "yourmail@email.com",
            phone: "1234567890",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#"
            }
        },
        {
            id: "2",
            name: "Nicholas Cage",
            role: "Director",
            image: "assets/images/team/team-v3-img2.jpg",
            details: "/team-details",
            email: "yourmail@email.com",
            phone: "1234567890",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#"
            }
        },
        {
            id: "3",
            name: "Keanu Reeves",
            role: "Mayor Assistant",
            image: "assets/images/team/team-v3-img3.jpg",
            details: "/team-details",
            email: "yourmail@email.com",
            phone: "1234567890",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#"
            }
        },
        {
            id: "4",
            name: "Brendan Fraser",
            role: "Ambassador",
            image: "assets/images/team/team-v3-img4.jpg",
            details: "/team-details",
            email: "yourmail@email.com",
            phone: "1234567890",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#"
            }
        },
        {
            id: "5",
            name: "Mel Gibson",
            role: "Director",
            image: "assets/images/team/team-v3-img5.jpg",
            details: "/team-details",
            email: "yourmail@email.com",
            phone: "1234567890",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#"
            }
        },
        {
            id: "6",
            name: "Harrison Ford",
            role: "Assistant",
            image: "assets/images/team/team-v3-img6.jpg",
            details: "/team-details",
            email: "yourmail@email.com",
            phone: "1234567890",
            social: {
                twitter: "#",
                facebook: "#",
                instagram: "#"
            }
        }
    ];

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedCandidates = mockCandidates.slice(start, end);
    
    return {
        candidates: paginatedCandidates,
        total: mockCandidates.length,
        page,
        pageSize,
        totalPages: Math.ceil(mockCandidates.length / pageSize)
    };
}