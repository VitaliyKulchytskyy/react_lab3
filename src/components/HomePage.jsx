import { useState } from "react";
import { Header } from "./homePageComponents/Header";
import { Link } from 'react-router-dom';
import Palette from "./homePageComponents/Palette";
import palettes from "../../artifacts/colors.json";
import { AnimatedPageTransition } from "./utilsComponents/AnimatedPageTransition";

export default function HomePage() {
    return (
        <AnimatedPageTransition>
            <div className="w-[1024px] mr-auto ml-auto mt-0 mb-0">
                <div className="my-[16px]">
                    <Header />
                </div>
                <div className="flex flex-wrap justify-between">
                    {palettes.map((palette) => (
                        <Link className="w-[30%] mb-[40px]" to={"palette/" + palette.id}>
                            <Palette palette={palette} />
                        </Link>
                    ))}
                </div>
            </div>
        </AnimatedPageTransition>
    );
};