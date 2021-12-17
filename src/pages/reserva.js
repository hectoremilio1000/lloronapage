import React from "react";
import Calendario from "../components/Calendario";
import Layout from "../components/layout";
import { HomeHeader } from "../components/styles/headers";

export default function reserva() {
  return (
    <Layout>
      <HomeHeader />
      <Calendario />
    </Layout>
  );
}
