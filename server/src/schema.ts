import { z } from 'zod';

// Service schema for marketing services
export const serviceSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  icon: z.string(), // Icon name or path
  features: z.array(z.string()), // JSON array of features
  is_featured: z.boolean(),
  display_order: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
});

export type Service = z.infer<typeof serviceSchema>;

// Input schema for creating services
export const createServiceInputSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  features: z.array(z.string()),
  is_featured: z.boolean().default(false),
  display_order: z.number().int().nonnegative().default(0)
});

export type CreateServiceInput = z.infer<typeof createServiceInputSchema>;

// Lead schema for potential customers
export const leadSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  company: z.string().nullable(),
  message: z.string(),
  service_interest: z.string().nullable(), // Which service they're interested in
  source: z.string().default('landing_page'), // How they found us
  status: z.enum(['new', 'contacted', 'qualified', 'converted', 'closed']).default('new'),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
});

export type Lead = z.infer<typeof leadSchema>;

// Input schema for creating leads (contact form submission)
export const createLeadInputSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().nullable().default(null),
  company: z.string().nullable().default(null),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  service_interest: z.string().nullable().default(null)
});

export type CreateLeadInput = z.infer<typeof createLeadInputSchema>;

// Landing page content schema for dynamic content management
export const landingPageContentSchema = z.object({
  id: z.number(),
  section: z.enum(['hero', 'about', 'services', 'testimonials', 'cta', 'footer']),
  title: z.string().nullable(),
  subtitle: z.string().nullable(),
  content: z.string().nullable(),
  image_url: z.string().nullable(),
  button_text: z.string().nullable(),
  button_link: z.string().nullable(),
  is_active: z.boolean().default(true),
  display_order: z.number().int().default(0),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
});

export type LandingPageContent = z.infer<typeof landingPageContentSchema>;

// Input schema for updating landing page content
export const updateLandingPageContentInputSchema = z.object({
  id: z.number(),
  title: z.string().nullable().optional(),
  subtitle: z.string().nullable().optional(),
  content: z.string().nullable().optional(),
  image_url: z.string().nullable().optional(),
  button_text: z.string().nullable().optional(),
  button_link: z.string().nullable().optional(),
  is_active: z.boolean().optional(),
  display_order: z.number().int().optional()
});

export type UpdateLandingPageContentInput = z.infer<typeof updateLandingPageContentInputSchema>;

// Testimonial schema for client testimonials
export const testimonialSchema = z.object({
  id: z.number(),
  client_name: z.string(),
  client_company: z.string().nullable(),
  client_position: z.string().nullable(),
  testimonial: z.string(),
  rating: z.number().int().min(1).max(5).default(5),
  avatar_url: z.string().nullable(),
  is_featured: z.boolean().default(false),
  display_order: z.number().int().default(0),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
});

export type Testimonial = z.infer<typeof testimonialSchema>;

// Input schema for creating testimonials
export const createTestimonialInputSchema = z.object({
  client_name: z.string().min(1),
  client_company: z.string().nullable().default(null),
  client_position: z.string().nullable().default(null),
  testimonial: z.string().min(10),
  rating: z.number().int().min(1).max(5).default(5),
  avatar_url: z.string().nullable().default(null),
  is_featured: z.boolean().default(false),
  display_order: z.number().int().default(0)
});

export type CreateTestimonialInput = z.infer<typeof createTestimonialInputSchema>;