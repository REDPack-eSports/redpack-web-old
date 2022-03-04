import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SocialMediaBar from "../components/SocialMediaBar";
import EventsShowcase from "../components/EventsShowcase";
import TeamsShowcase from "../components/TeamsShowcase";
import CreatorsShowcase from "../components/CreatorsShowcase";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <SocialMediaBar />
      <EventsShowcase />
      <TeamsShowcase />
      <CreatorsShowcase />
    </Layout>
  );
};

export default IndexPage;
