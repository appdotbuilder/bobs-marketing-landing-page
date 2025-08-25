import { 
  serial, 
  text, 
  pgTable, 
  timestamp, 
  boolean, 
  integer,
  json,
  pgEnum 
} from 'drizzle-orm/pg-core';

// Enum for lead status
export const leadStatusEnum = pgEnum('lead_status', [
  'new', 
  'contacted', 
  'qualified', 
  'converted', 
  'closed'
]);

// Enum for landing page sections
export const landingPageSectionEnum = pgEnum('landing_page_section', [
  'hero',
  'about', 
  'services',
  'testimonials',
  'cta',
  'footer'
]);

// Services table for marketing services offered
export const servicesTable = pgTable('services', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  icon: text('icon').notNull(), // Icon name or path
  features: json('features').notNull().$type<string[]>(), // JSON array of features
  is_featured: boolean('is_featured').notNull().default(false),
  display_order: integer('display_order').notNull().default(0),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

// Leads table for potential customers
export const leadsTable = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'), // Nullable
  company: text('company'), // Nullable
  message: text('message').notNull(),
  service_interest: text('service_interest'), // Which service they're interested in
  source: text('source').notNull().default('landing_page'), // How they found us
  status: leadStatusEnum('status').notNull().default('new'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

// Landing page content table for dynamic content management
export const landingPageContentTable = pgTable('landing_page_content', {
  id: serial('id').primaryKey(),
  section: landingPageSectionEnum('section').notNull(),
  title: text('title'), // Nullable
  subtitle: text('subtitle'), // Nullable
  content: text('content'), // Nullable
  image_url: text('image_url'), // Nullable
  button_text: text('button_text'), // Nullable
  button_link: text('button_link'), // Nullable
  is_active: boolean('is_active').notNull().default(true),
  display_order: integer('display_order').notNull().default(0),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

// Testimonials table for client testimonials
export const testimonialsTable = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  client_name: text('client_name').notNull(),
  client_company: text('client_company'), // Nullable
  client_position: text('client_position'), // Nullable
  testimonial: text('testimonial').notNull(),
  rating: integer('rating').notNull().default(5),
  avatar_url: text('avatar_url'), // Nullable
  is_featured: boolean('is_featured').notNull().default(false),
  display_order: integer('display_order').notNull().default(0),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

// TypeScript types for the table schemas
export type Service = typeof servicesTable.$inferSelect;
export type NewService = typeof servicesTable.$inferInsert;

export type Lead = typeof leadsTable.$inferSelect;
export type NewLead = typeof leadsTable.$inferInsert;

export type LandingPageContent = typeof landingPageContentTable.$inferSelect;
export type NewLandingPageContent = typeof landingPageContentTable.$inferInsert;

export type Testimonial = typeof testimonialsTable.$inferSelect;
export type NewTestimonial = typeof testimonialsTable.$inferInsert;

// Export all tables for proper query building and relations
export const tables = {
  services: servicesTable,
  leads: leadsTable,
  landingPageContent: landingPageContentTable,
  testimonials: testimonialsTable,
};