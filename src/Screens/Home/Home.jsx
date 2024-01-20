import React, { Fragment } from "react";
import ChooseUs from "../../Components/Choose_Us/ChooseUs";
import Download from "../../Components/Download_Section/Download";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroSlider from "../../Components/Hero_Slider/HeroSlider";
import MenuPack from "../../Components/Menu_Pack/MenuPack";
import PopularProduct from "../../Components/Popular_Product/PopularProduct";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularProduct />
      <ChooseUs />
      <MenuPack />
      <Testimonial />
      <Download />
      <Footer />
    </Fragment>
  );
};

export default Home;
