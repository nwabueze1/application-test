"use client";
import {
  AssetsClasses,
  Container,
  Footer,
  Hero,
  HowWeRegulate,
  Investment,
  Investors,
  JoinOurUsers,
  JoinTheRiseCommunity,
  Navbar,
  SaveForTheFuture,
  Testimonials,
} from "@/components";
import { investments } from "@/data/investments";

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
