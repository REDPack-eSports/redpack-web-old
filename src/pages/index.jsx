import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import SocialMediaBar from "../components/social_media_bar";
import Tournament from "../components/tournament";
import TeamShowcase from "../components/team_showcase";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <SocialMediaBar />
        <Tournament />
        <TeamShowcase />
      </Layout>
    </>
  );
};

export default IndexPage;
