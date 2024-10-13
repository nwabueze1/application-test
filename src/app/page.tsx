"use client";
import { Hero } from "@/components";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/Container";
import { Investors } from "@/components/Investors";
import { Investment } from "@/components/Investment";
import { investments } from "@/data/investments";
import { AssetsClasses } from "@/components/AssetsClasses";
import { HowWeRegulate } from "@/components/HowWeRegulate";
import { JoinTheRiseCommunity } from "@/components/JoinTheRiseCommunity";
import { JoinOurUsers } from "@/components/JoinOurUsers";
import { SaveForTheFuture } from "@/components/SaveForTheFuture";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const renderInvestments = () =>
    investments.map((investment, index) => <Investment key={index} {...investment} />);

  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Investors />
        {renderInvestments()}
        <AssetsClasses />
        <SaveForTheFuture />
      </Container>
      <HowWeRegulate />
      <Container>
        <Testimonials />
        <JoinTheRiseCommunity />
        <JoinOurUsers />
        <Footer />
      </Container>
    </>
  );
}
