import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { HomeHeader } from "../components/styles/headers";
import Banner from "../components/banner";
import { BannerButton } from "../components/styles/buttons";

import "../styles/global.css";
import QuickInfo from "../components/quickInfo";
import TitlebarImageList from "../components/TitlebarImageList";

import { QuickInfoWrapper } from "../components/styles/globalStyles";
import { SectionButton } from "../components/styles/buttons";
import Title from "../components/title";
import Section from "../components/styles/section";

const IndexPage = () => (
  <Layout>
    <HomeHeader />
    <header
      className="col jumbotron jumbotron-fluid bannerFinal"
      style={{
        backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/HAMBURGUESA_jack_suizo.JPG")`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex subContenedor1Banner">
        <div class="p-2 subDiv1Banner">
          <h3 className=" font-weight-bold pt-3 proximamente">
            Las mejores <b>Hamburguesas</b> de CDMX
          </h3>

          <div className="subSubDiv1Banner">
            <Link to="">
              <button
                type="button"
                className="btn btn-success btn-lg text-white buttonComponente"
              >
                ¡Reserva ya!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
    <QuickInfo />
    <TitlebarImageList />
    <Section>
      <Title message="Ubicación " title="de esta gran experiencia" />

      <QuickInfoWrapper>
        <p className="textUbicacion">
          Alvaro obregón 308 Roma Condesa CDMX México
        </p>

        <Link to="/reserva" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>RESERVA</SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  </Layout>
);

export default IndexPage;
