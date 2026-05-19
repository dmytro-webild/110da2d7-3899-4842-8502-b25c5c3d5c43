"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
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
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ShopCommerce"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "plain",
      }}
      title="Elevate Your Lifestyle"
      description="Discover curated products designed for the modern lifestyle. Fast shipping, premium quality, and effortless shopping at your fingertips."
      kpis={[
        {
          value: "10k+",
          label: "Satisfied Customers",
        },
        {
          value: "500+",
          label: "Premium Products",
        },
        {
          value: "24/7",
          label: "Expert Support",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=e9cmy3"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "asset://hero-avatar-1",
          alt: "Customer 1",
        },
        {
          src: "asset://hero-avatar-2",
          alt: "Customer 2",
        },
        {
          src: "asset://hero-avatar-3",
          alt: "Customer 3",
        },
        {
          src: "asset://hero-avatar-4",
          alt: "Customer 4",
        },
        {
          src: "asset://hero-avatar-5",
          alt: "Customer 5",
        },
      ]}
      avatarText="Trusted by 10,000+ happy shoppers"
      marqueeItems={[
        {
          type: "text",
          text: "Free Shipping",
        },
        {
          type: "text",
          text: "Sustainable Materials",
        },
        {
          type: "text",
          text: "30-Day Returns",
        },
        {
          type: "text",
          text: "24/7 Support",
        },
        {
          type: "text",
          text: "Gift Wrapping",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Modern Minimalist Vase",
          price: "$45.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xbddk1",
        },
        {
          id: "p2",
          name: "Ceramic Table Lamp",
          price: "$89.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=yhmhwz",
        },
        {
          id: "p3",
          name: "Organic Cotton Throw",
          price: "$65.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=l7i5vl",
        },
        {
          id: "p4",
          name: "Sustainable Wood Desk",
          price: "$299.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3ieuj6",
        },
        {
          id: "p5",
          name: "Handmade Storage Basket",
          price: "$38.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0ows9v",
        },
        {
          id: "p6",
          name: "Abstract Wall Print",
          price: "$55.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3p8xej",
        },
      ]}
      title="Latest Collections"
      description="Explore our hand-picked selections curated for style and functionality."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Vogue Living",
        "Architectural Digest",
        "Design Milk",
        "Elle Decor",
        "Domino",
        "Apartment Therapy",
        "Wallpaper*",
      ]}
      title="Featured In"
      description="Trusted by leading lifestyle publications and design critics worldwide."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Alice Green",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=34tv2k",
        },
        {
          id: "t2",
          name: "Mark Miller",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hmrxo0",
        },
        {
          id: "t3",
          name: "Sarah Chen",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h1t4fz",
        },
        {
          id: "t4",
          name: "David Smith",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3m4wcb",
        },
        {
          id: "t5",
          name: "Emily White",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ire0yt",
        },
      ]}
      cardTitle="What People Say"
      cardTag="Testimonials"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Premium Quality",
          subtitle: "Crafted with durable materials.",
          category: "Quality",
          value: "High Standard",
        },
        {
          id: "f2",
          title: "Eco-Friendly",
          subtitle: "Sourced sustainably.",
          category: "Environment",
          value: "Green Tech",
        },
        {
          id: "f3",
          title: "Fast Shipping",
          subtitle: "Delivered to your doorstep.",
          category: "Logistics",
          value: "24h Delivery",
        },
      ]}
      title="Why Shop With Us"
      description="We prioritize quality, sustainability, and exceptional service in every product we offer."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "98%",
          description: "Customer Satisfaction",
        },
        {
          id: "m2",
          value: "25k",
          description: "Orders Completed",
        },
        {
          id: "m3",
          value: "4.9",
          description: "Global Rating",
        },
      ]}
      title="Our Impact"
      description="Numbers that define our growth and customer satisfaction."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "How long is shipping?",
          content: "Usually 3-5 business days.",
        },
        {
          id: "faq2",
          title: "Can I return items?",
          content: "Yes, within 30 days of purchase.",
        },
        {
          id: "faq3",
          title: "Do you ship worldwide?",
          content: "Yes, we ship to over 50 countries.",
        },
      ]}
      title="Need Help?"
      description="Answers to common questions regarding your order and our policies."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Stay Updated"
      title="Get Our Newsletter"
      description="Subscribe for early access to new collections and exclusive discounts."
      mediaAnimation="slide-up"
      buttonText="Subscribe"
      imageSrc="asset://contact-bg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="ShopCommerce"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms & Conditions",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
