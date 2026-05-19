"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="DropShipPro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="DropShipPro"
      description="Premium goods delivered straight to your door. We curate the best products so you don't have to."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=wjuyvi"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Lightning Fast",
          description: "Global shipping in under 7 days.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h3831c",
        },
        {
          title: "24/7 Support",
          description: "Real human assistance anytime.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4a8gmu",
        },
        {
          title: "Money-Back Guarantee",
          description: "Shop with total peace of mind.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=f6m80c",
        },
      ]}
      title="Why Choose Us"
      description="We ensure the best experience for every shopper."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Smart Watch X",
          price: "$199",
          variant: "Black/Silver",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vc55ry",
        },
        {
          id: "2",
          name: "Acoustic Headphones",
          price: "$299",
          variant: "Midnight",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=jnyzjn",
        },
        {
          id: "3",
          name: "Studio Lamp",
          price: "$89",
          variant: "Modern Brass",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4zaf9y",
        },
        {
          id: "4",
          name: "Brew Master",
          price: "$150",
          variant: "Matte White",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=mc1m2x",
        },
        {
          id: "5",
          name: "Commuter Pack",
          price: "$120",
          variant: "Urban Grey",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=n1j8mp",
        },
        {
          id: "6",
          name: "Glow Skincare Kit",
          price: "$65",
          variant: "Natural",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xofpwc",
        },
      ]}
      title="New Arrivals"
      description="Explore our curated collection of trending tech and lifestyle essentials."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Trusted Globally"
      tag="Our Impact"
      metrics={[
        {
          id: "m1",
          value: "10k+",
          description: "Happy Customers",
        },
        {
          id: "m2",
          value: "25k+",
          description: "Products Shipped",
        },
        {
          id: "m3",
          value: "4.9/5",
          description: "Average Rating",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The quality of products is simply outstanding. Fast delivery and exceptional customer service made me a loyal fan."
      rating={5}
      author="Sarah Miller"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=y9me56",
          alt: "Sarah",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zg2e6l",
          alt: "Mark",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4lj7in",
          alt: "Elena",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1hx784",
          alt: "David",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g8c35x",
          alt: "Julia",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How long is shipping?",
          content: "Orders typically ship within 3-7 business days.",
        },
        {
          id: "f2",
          title: "What is the return policy?",
          content: "We offer a 30-day no-questions-asked return policy.",
        },
        {
          id: "f3",
          title: "Do you ship internationally?",
          content: "Yes, we ship to over 150 countries worldwide.",
        },
      ]}
      title="Common Questions"
      description="Answers to everything you need to know about shopping with us."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={[
        "TechCorp",
        "InnovateLab",
        "GrowthCo",
        "StartupXYZ",
        "DigitalWave",
        "CreativeStudio",
        "FutureGrid",
      ]}
      title="Partners & Brands"
      description="Collaborating with leading manufacturers."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to elevate your lifestyle? Let's connect."
      buttons={[
        {
          text: "Get In Touch",
          href: "mailto:hello@dropshippro.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="DropShipPro"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Trending",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#products",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Help Center",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2024 DropShipPro. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
