import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HomeHero from "@/components/home/home-hero";
import SectionContainer from "@/components/shared/section-container";
import HomeFeatures from "@/components/home/home-features";
import HomeLocations from "@/components/home/home-locations";
import HomeFeatureHeros from "@/components/home/home-feature-heros";

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
      <HomeHero />
      <SectionContainer>
        <HomeFeatures />
      </SectionContainer>
      <HomeLocations/>
      <SectionContainer>
        <HomeFeatureHeros/>
      </SectionContainer>
    </div>
  );
}
