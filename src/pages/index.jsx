import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import SocialMediaBar from "../components/social_media_bar";
import EventsShowcase from "../components/events_showcase";
import TeamsShowcase from "../components/teams_showcase";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <SocialMediaBar />
        <EventsShowcase />
        <TeamsShowcase />
      </Layout>
    </>
  );
};

export default IndexPage;
