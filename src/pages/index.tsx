import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HomeHero from "@/components/home/home-hero";
import SectionContainer from "@/components/shared/section-container";
import HomeFeatures from "@/components/home/home-features";
import HomeLocations from "@/components/home/home-locations";
import HomeFeatureHeros from "@/components/home/home-feature-heros";
import HomeRatings from "@/components/home/home-ratings";
import Seo from "@/components/shared/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={``}>
     <Seo
  route=""
  image="/images/woman-laptop.jpg"
  title="NextFlytt – Din kompletta flyttpartner i Stockholm"
  description="NextFlytt erbjuder professionella flytt- och städtjänster i Stockholm. Vi skapar smidiga och trygga lösningar för både privatpersoner och företag – från flytt till flyttstädning och mer."
/>
      <HomeHero />
      <SectionContainer>
        <HomeFeatures />
      </SectionContainer>
      <HomeRatings />
      <SectionContainer>
        <HomeFeatureHeros />
      </SectionContainer>
      <HomeLocations />
    </div>
  );
}
