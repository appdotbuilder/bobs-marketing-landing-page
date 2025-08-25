import { type Service } from '../schema';

export async function getServices(): Promise<Service[]> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all marketing services from the database,
    // ordered by display_order and filtered by active status.
    // Should return services like SEO, Social Media Marketing, Content Marketing, etc.
    return [
        {
            id: 1,
            name: "SEO Optimization",
            description: "Boost your online visibility with our comprehensive SEO strategies",
            icon: "search",
            features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
            is_featured: true,
            display_order: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 2,
            name: "Social Media Marketing",
            description: "Engage your audience across all major social platforms",
            icon: "share",
            features: ["Content Creation", "Community Management", "Paid Social Ads", "Analytics"],
            is_featured: true,
            display_order: 2,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 3,
            name: "Content Marketing",
            description: "Create compelling content that drives engagement and conversions",
            icon: "edit",
            features: ["Blog Writing", "Video Production", "Email Campaigns", "Brand Storytelling"],
            is_featured: true,
            display_order: 3,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 4,
            name: "Web Design",
            description: "Modern, responsive websites that convert visitors into customers",
            icon: "desktop",
            features: ["Responsive Design", "UX/UI Optimization", "E-commerce Setup", "Performance Optimization"],
            is_featured: true,
            display_order: 4,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 5,
            name: "Paid Advertising",
            description: "Maximize ROI with targeted advertising campaigns",
            icon: "target",
            features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Campaign Optimization"],
            is_featured: true,
            display_order: 5,
            created_at: new Date(),
            updated_at: new Date()
        }
    ];
}