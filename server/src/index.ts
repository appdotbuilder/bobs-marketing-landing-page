import { initTRPC } from '@trpc/server';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import 'dotenv/config';
import cors from 'cors';
import superjson from 'superjson';

// Import schema types and handlers
import { 
  createLeadInputSchema,
  createServiceInputSchema,
  createTestimonialInputSchema,
  updateLandingPageContentInputSchema
} from './schema';

import { getServices } from './handlers/get_services';
import { createLead } from './handlers/create_lead';
import { getLandingPageContent } from './handlers/get_landing_page_content';
import { getTestimonials } from './handlers/get_testimonials';
import { createService } from './handlers/create_service';
import { createTestimonial } from './handlers/create_testimonial';
import { updateLandingPageContent } from './handlers/update_landing_page_content';

const t = initTRPC.create({
  transformer: superjson,
});

const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
  // Health check endpoint
  healthcheck: publicProcedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }),

  // Landing page content endpoints
  getLandingPageContent: publicProcedure
    .query(() => getLandingPageContent()),

  updateLandingPageContent: publicProcedure
    .input(updateLandingPageContentInputSchema)
    .mutation(({ input }) => updateLandingPageContent(input)),

  // Services endpoints
  getServices: publicProcedure
    .query(() => getServices()),

  createService: publicProcedure
    .input(createServiceInputSchema)
    .mutation(({ input }) => createService(input)),

  // Lead generation endpoints
  createLead: publicProcedure
    .input(createLeadInputSchema)
    .mutation(({ input }) => createLead(input)),

  // Testimonials endpoints
  getTestimonials: publicProcedure
    .query(() => getTestimonials()),

  createTestimonial: publicProcedure
    .input(createTestimonialInputSchema)
    .mutation(({ input }) => createTestimonial(input)),
});

export type AppRouter = typeof appRouter;

async function start() {
  const port = process.env['SERVER_PORT'] || 2022;
  const server = createHTTPServer({
    middleware: (req, res, next) => {
      cors()(req, res, next);
    },
    router: appRouter,
    createContext() {
      return {};
    },
  });
  server.listen(port);
  console.log(`TRPC server listening at port: ${port}`);
}

start();