import { type Testimonial } from '../schema';

export async function getTestimonials(): Promise<Testimonial[]> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching featured testimonials from the database,
    // ordered by display_order to showcase client success stories and build trust.
    // Should return testimonials with client information and ratings.
    return [
        {
            id: 1,
            client_name: "Sarah Johnson",
            client_company: "TechStart Solutions",
            client_position: "CEO",
            testimonial: "Bob's Marketing transformed our online presence completely. Our lead generation increased by 300% within the first 3 months of working together.",
            rating: 5,
            avatar_url: "/testimonials/sarah.jpg",
            is_featured: true,
            display_order: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 2,
            client_name: "Michael Chen",
            client_company: "GrowthCorp",
            client_position: "Marketing Director",
            testimonial: "The ROI from our paid advertising campaigns has been outstanding. Bob's team really knows how to optimize for results, not just clicks.",
            rating: 5,
            avatar_url: "/testimonials/michael.jpg",
            is_featured: true,
            display_order: 2,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 3,
            client_name: "Emily Rodriguez",
            client_company: "Local Boutique",
            client_position: "Owner",
            testimonial: "Our website redesign and SEO work brought us to the first page of Google. Sales have doubled since working with Bob's Marketing!",
            rating: 5,
            avatar_url: "/testimonials/emily.jpg",
            is_featured: true,
            display_order: 3,
            created_at: new Date(),
            updated_at: new Date()
        }
    ];
}