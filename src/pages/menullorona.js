import React, { useState } from "react";
import Layout from "../components/layout";
import { HomeHeader } from "../components/styles/headers";
import items from "../data/assets/data";
import Categories from "../components/Categories";
import Menu from "../components/Menu";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ImagenMenu from "../components/Menu/ImagenMenu";

import menuCantinero from "../data/imagenes/menucantinero150122.jpg";
import menuHamburguesas from "../data/imagenes/menu_hamburguesa 150122.jpg";
import menuMalteadas from "../data/imagenes/menu_malteadas150122.jpg";
import menuMixologia from "../data/imagenes/mixologiamenu150122.jpg";
import menuTacos from "../data/imagenes/tacosmenu100222.jpg";
import menuPizzas from "../data/imagenes/menupizza100222.jpg";
import menuVeggie from "../data/imagenes/menuveggie300322nuevo.jpg";

function MenuLlorona() {
  return (
    <Layout>
      <HomeHeader />
      <section className="menu section">
        <div className="title">
          <h2>Menú Llorona</h2>
          <h5 className="text-center tituloSection menutext">
            Recuerda: Por cada trago o cerveza artesanal puedes pedir un bajón
            del Menú Cantinero
          </h5>
          <div className="underline"></div>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Hamburguesas">
              <ImagenMenu src={menuHamburguesas} />
            </Tab>
            <Tab eventKey="profile" title="Malteadas">
              <ImagenMenu src={menuMalteadas} />
            </Tab>
            <Tab eventKey="contact" title="Mixología">
              <ImagenMenu src={menuMixologia} />
            </Tab>
            <Tab eventKey="tacos" title="Tacos">
              <ImagenMenu src={menuTacos} />
            </Tab>
            <Tab eventKey="pizzas" title="Pizzas">
              <ImagenMenu src={menuPizzas} />
            </Tab>
            <Tab eventKey="menucantinero" title="Menú Cantinero">
              <ImagenMenu src={menuCantinero} />
            </Tab>
            <Tab eventKey="menuveggie" title="Menú Veggie">
              <ImagenMenu src={menuVeggie} />
            </Tab>
            <Tab eventKey="bebidas" title="Menú Bebidas">
              hola8
            </Tab>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}

export default MenuLlorona;
