//jshint esversion: 9
import React from "react";
import CategoryBanner from "../components/homePage/CategoryBanner";
import DeliveryBanner from "../components/homePage/DeliveryBanner";
import ImageSlider from "../components/homePage/ImageSlider";
import Testimonials from "../components/homePage/Testimonials";
import TrendingSection from "../components/homePage/TrendingSection";

function Home() {
    return (
        <div className="homepage">
            <div className="container">
                <CategoryBanner />
            </div>
            <div className="container">
                <TrendingSection />
            </div>
            <Testimonials />
            <DeliveryBanner />
        </div>
    );
}

export default Home;
