import React from "react";
import Calendario from "../components/Calendario";
import Layout from "../components/layout";
import { HomeHeader } from "../components/styles/headers";

import { QuickInfoWrapper } from "../components/styles/globalStyles";
import Title from "../components/title";
import Section from "../components/styles/section";

export default function reserva() {
  return (
    <Layout>
      <HomeHeader />
      <Calendario />
      <Section>
        <Title
          message="Los jueves "
          title="Celebra tu cumpleaños con nosotros"
        />

        <QuickInfoWrapper>
          <p className="textUbicacion">
            La piñata cumpleañera no tiene costo, y aplica todos los jueves si
            cumples años en el mes ❤️🪅 y solo tienen que hacer reservación en
            cualquiera de nuestras redes sociales. Les regalamos dulces típicos
            mexicanos y una botella de nuestro mejor mezcal de la casa 🍶🥃
            madre cuishe el cual está elaborado artesanalmente.
          </p>
        </QuickInfoWrapper>
      </Section>
    </Layout>
  );
}
