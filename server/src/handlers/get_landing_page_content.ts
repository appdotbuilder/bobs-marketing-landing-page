import { type LandingPageContent } from '../schema';

export async function getLandingPageContent(): Promise<LandingPageContent[]> {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all active landing page content sections,
    // ordered by display_order for proper page structure rendering.
    // Should return content for hero, about, services, testimonials, CTA, and footer sections.
    return [
        {
            id: 1,
            section: 'hero' as const,
            title: "Transform Your Business with Bob's Marketing",
            subtitle: "Professional Marketing Solutions That Drive Results",
            content: "We help businesses grow through strategic digital marketing, innovative web design, and data-driven campaigns that deliver measurable ROI.",
            image_url: "/hero-bg.jpg",
            button_text: "Get Started Today",
            button_link: "#contact",
            is_active: true,
            display_order: 1,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 2,
            section: 'about' as const,
            title: "Why Choose Bob's Marketing?",
            subtitle: "Experience That Delivers Results",
            content: "With over 10 years of experience in digital marketing, we've helped hundreds of businesses achieve their growth goals through innovative strategies and cutting-edge solutions.",
            image_url: "/about-team.jpg",
            button_text: "Learn More",
            button_link: "#services",
            is_active: true,
            display_order: 2,
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            id: 3,
            section: 'cta' as const,
            title: "Ready to Grow Your Business?",
            subtitle: "Get a Free Marketing Consultation",
            content: "Schedule a no-obligation consultation with our marketing experts and discover how we can help accelerate your business growth.",
            image_url: null,
            button_text: "Contact Us Now",
            button_link: "#contact",
            is_active: true,
            display_order: 6,
            created_at: new Date(),
            updated_at: new Date()
        }
    ];
}