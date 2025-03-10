'use strict';

/**
 * Bootstrap script for Destination Decks Strapi CMS
 * Place this file at ./src/bootstrap.js in your Strapi project. 
 */

module.exports = async ({ strapi }) => {
  try {
    // Check if data already exists to avoid duplicates
    const existingGlobal = await strapi.entityService.findMany('api::global.global');
    const existingHero = await strapi.entityService.findMany('api::hero.hero');
    const existingBusinessInfo = await strapi.entityService.findMany('api::business-info.business-info');
    
    // Only seed if data doesn't exist
    if (!existingGlobal || existingGlobal.length === 0) {
      // Seed Global
      await strapi.entityService.create('api::global.global', {
        data: {
          siteName: "Destination Decks",
          defaultSeo: {
            metaTitle: "Destination Decks - Premium Deck Construction",
            metaDescription: "Custom deck design and construction services for residential and commercial properties",
          },
          siteDescription: "Your premier provider of custom deck solutions",
          publishedAt: new Date().toISOString(),
        },
      });
      console.log('✅ Global data seeded');
    }

    if (!existingHero || existingHero.length === 0) {
      // Seed Hero
      await strapi.entityService.create('api::hero.hero', {
        data: {
          title: "Custom Decks Built To Last",
          subtitle: "Transform Your Outdoor Space",
          description: "At Destination Decks, we design and build premium custom decks that combine beauty, functionality, and durability. Our experienced team turns your outdoor vision into reality.",
          publishedAt: new Date().toISOString(),
        },
      });
      console.log('✅ Hero data seeded');
    }

    if (!existingBusinessInfo || existingBusinessInfo.length === 0) {
      // Seed Business Info
      await strapi.entityService.create('api::business-info.business-info', {
        data: {
          name: "Destination Decks",
          phone: "(555) 555-5555",
          email: "info@destinationdecks.com",
          address: "1234 Deck Avenue, Suite 100",
          city: "Woodland Hills",
          state: "CA",
          zip: "91364",
          hours_weekday: "Mon-Fri: 8am - 5pm",
          hours_weekend: "Sat: 9am - 2pm",
          publishedAt: new Date().toISOString(),
        },
      });
      console.log('✅ Business Info data seeded');
    }

    // Seed Services if they don't exist
    const existingServices = await strapi.entityService.findMany('api::service.service');
    if (!existingServices || existingServices.length === 0) {
      const services = [
        {
          title: "Custom Deck Design",
          description: "Our professional designers work with you to create the perfect deck for your space, style, and budget. We provide 3D renderings so you can visualize your new deck before construction begins.",
          icon: "Ruler",
          link: "/services/custom-deck-design",
          publishedAt: new Date().toISOString(),
        },
        {
          title: "Deck Construction",
          description: "Our experienced builders use premium materials and proven techniques to construct durable, beautiful decks that will last for decades. We handle everything from permits to final inspection.",
          icon: "Hammer",
          link: "/services/deck-construction",
          publishedAt: new Date().toISOString(),
        },
        {
          title: "Deck Restoration",
          description: "Breathe new life into your existing deck with our comprehensive restoration services. We repair structural issues, replace damaged boards, and refinish surfaces to make your deck look like new.",
          icon: "Paintbrush",
          link: "/services/deck-restoration",
          publishedAt: new Date().toISOString(),
        },
        {
          title: "Deck Maintenance",
          description: "Protect your investment with our regular maintenance services. We clean, seal, and inspect your deck to keep it looking great and prevent costly repairs.",
          icon: "Wrench",
          link: "/services/deck-maintenance",
          publishedAt: new Date().toISOString(),
        },
        {
          title: "Free Consultation",
          description: "Not sure what you need? Schedule a free consultation with one of our deck specialists. We'll assess your space, discuss your goals, and provide expert recommendations.",
          icon: "Calendar",
          link: "/services/consultation",
          publishedAt: new Date().toISOString(),
        }
      ];

      for (const service of services) {
        await strapi.entityService.create('api::service.service', {
          data: service
        });
      }
      console.log('✅ Services data seeded');
    }

    // Seed Projects if they don't exist
    const existingProjects = await strapi.entityService.findMany('api::project.project');
    if (!existingProjects || existingProjects.length === 0) {
      const projects = [
        {
          title: "Woodland Hills Backyard Oasis",
          description: "This expansive composite deck features multiple levels, built-in seating, and integrated lighting to create the perfect outdoor entertainment space.",
          category: "featured",
          publishedAt: new Date().toISOString(),
        },
        {
          title: "Sherman Oaks Pool Deck",
          description: "This slip-resistant pool deck was designed to complement the contemporary architecture of the home while providing a safe, beautiful space for poolside relaxation.",
          category: "before-after",
          publishedAt: new Date().toISOString(),
        },
        {
          title: "Malibu Beachfront Deck",
          description: "This premium hardwood deck was custom-designed to withstand the harsh coastal environment while providing a stunning outdoor living space with panoramic ocean views.",
          category: "recent",
          publishedAt: new Date().toISOString(),
        }
      ];

      for (const project of projects) {
        await strapi.entityService.create('api::project.project', {
          data: project
        });
      }
      console.log('✅ Projects data seeded');
    }

    // Seed Testimonials if they don't exist
    const existingTestimonials = await strapi.entityService.findMany('api::testimonial.testimonial');
    if (!existingTestimonials || existingTestimonials.length === 0) {
      const testimonials = [
        {
          name: "Jennifer S.",
          location: "Woodland Hills, CA",
          project: "Custom Composite Deck",
          rating: 5,
          text: "Destination Decks exceeded our expectations in every way. From the initial design consultation to the final walkthrough, their team was professional, communicative, and detail-oriented. Our new deck has become our favorite part of our home!",
          publishedAt: new Date().toISOString(),
        },
        {
          name: "Michael T.",
          location: "Sherman Oaks, CA",
          project: "Pool Deck Renovation",
          rating: 5,
          text: "We hired Destination Decks to replace our old, worn-out pool deck, and we couldn't be happier with the results. The new deck is beautiful, durable, and has completely transformed our backyard. The team was a pleasure to work with from start to finish.",
          publishedAt: new Date().toISOString(),
        },
        {
          name: "Sarah L.",
          location: "Encino, CA",
          project: "Deck Restoration",
          rating: 4,
          text: "Destination Decks did an amazing job restoring our 15-year-old deck. It looks brand new! They were able to repair several structural issues and replace damaged boards without having to rebuild the entire deck, which saved us a lot of money.",
          publishedAt: new Date().toISOString(),
        }
      ];

      for (const testimonial of testimonials) {
        await strapi.entityService.create('api::testimonial.testimonial', {
          data: testimonial
        });
      }
      console.log('✅ Testimonials data seeded');
    }

    console.log('👍 All data seeded successfully');
  } catch (error) {
    console.error('⚠️ Bootstrap error:', error);
  }
};