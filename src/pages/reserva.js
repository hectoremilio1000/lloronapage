import React from "react";
import Calendario from "../components/Calendario";
import Layout from "../components/layout";
import { HomeHeader } from "../components/styles/headers";

import { QuickInfoWrapper } from "../components/styles/globalStyles";
import Title from "../components/title";
import Section from "../components/styles/section";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

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
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map(item => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Layout>
  );
}

const itemData = [
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/hamburguesa_resistir_2_insta.JPG",
    title: "Hamburguesa de tocino",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/HAMBURGUESA_CAMARON_BBQ+copy.JPG",
    title: "Hamburguesa de camarón",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/bbq2reducidatamano.jpg",
    title: "BBQ casa",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/hamburguesahuevo.jpg",
    title: "DON HUEVO",
    cols: 2,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/pizza_margarita_insta.jpg",
    title: "Pizza margarita",
    cols: 2,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/catecorazon.jpg",
    title: "Cate de mi corazón",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
