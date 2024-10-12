"use client";
import { About } from "@/components/home/About";
import { Layout, LayoutPropsRef } from "@/components/Layout";
import { sidebarData } from "@/data/sidebar";
import { useRef } from "react";
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
      </Container>
      <HowWeRegulate />
      <Container>
        <JoinTheRiseCommunity />
        <JoinOurUsers />
      </Container>
    </>
  );
}
