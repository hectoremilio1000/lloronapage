import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { HomeHeader } from "../components/styles/headers";

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
      className="col jumbotron-fluid bannerFinal"
      style={{
        backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/HAMBURGUESA_jack_suizo.JPG")`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex subContenedor1Banner">
        <div class="subDiv1Banner">
          <h3 className=" font-weight-bold proximamente">
            Las mejores <b>Hamburguesas</b> de CDMX
          </h3>

          <div className="subSubDiv1Banner">
            <Link to="/reserva">
              <button type="button" className="buttonComponente">
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
      {/* <div>
        <h4 className="text-center">Ubicación</h4>
        <h2>de esta gran experiencia</h2>
      </div> */}

      <Title message="Ubicación" title="de esta gran experiencia" />

      <QuickInfoWrapper>
        <p className="textUbicacion">
          Alvaro obregón 308 Roma Condesa CDMX México
        </p>

        <div className="subSubDiv1Banner">
          <Link to="/reserva">
            <button type="button" className="buttonComponente">
              ¡Reserva ya!
            </button>
          </Link>
        </div>
      </QuickInfoWrapper>
    </Section>
  </Layout>
);

export default IndexPage;
