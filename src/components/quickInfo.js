import React from "react";
import { Link } from "gatsby";

import { QuickInfoWrapper } from "../components/styles/globalStyles";
import { SectionButton } from "../components/styles/buttons";
import Title from "./title";
import Section from "../components/styles/section";

import "../styles/global.css";

const QuickInfo = () => (
  <Section>
    <div>
      <h4 className="text-center tituloSection">Hacia TI</h4>
      <h2 className="text-center subTituloSection">Nuestra promesa</h2>
      <div className="linea"></div>
    </div>

    <QuickInfoWrapper>
      <p className="text">
        La Llorona surge de la fusión de la riqueza de la cocina urbana
        contemporánea y la vida de la cantina mexicana. Nuestra especialidad son
        las Hamburguesas con pan artesanal horneado por nosotros, con carne 100%
        sirloin importada desde Estados Unidos y ya sea que pidas «Ella es
        queso» que tiene un fondue de queso Suizo con kirsch (licor de cerezas)
        y vino blanco o la «Porky Pig» que es preparada con nuestra receta única
        de brocheta de tocino crujiente .
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
);

export default QuickInfo;
