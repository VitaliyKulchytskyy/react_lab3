import palettes from "../../artifacts/colors.json";
import ColorBlock from "./palettePageComponents/ColorBlock";
import DropBox from "./palettePageComponents/DropBox";
import SoundToggle from "./palettePageComponents/SoundToggle";
import Notify from "../../public/src_notify.mp3";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useSound from "use-sound";

import { colorType } from "../utils/colorUtils";
import { getById } from "../utils/jsonUtils";
import CopiedMessage from "./palettePageComponents/CopiedMessage";
import { AnimatedPageTransition } from "./utilsComponents/AnimatedPageTransition";

export default function PalettePage() {
    const params = useParams();
    const thisPalette = getById(palettes, params.paletteId);

    const [soundState, setSoundState] = useState(true);
    const [getColorType, setColorType] = useState(0);
    const [color, setColor] = useState({
        hex: "#ffffff",
        converted: "#ffffff",
    });

    const [playSound] = useSound(Notify);

    const [fade, setFade] = useState(false);

    const handleFading = () => {
        setFade(true);

        setTimeout(() => {
            setFade(false);
        }, 1500);
    };

    const copyColorAction = () => {
        if (soundState) playSound();

        handleFading();
    };

    return (
        <AnimatedPageTransition>
            <div className="flex flex-col h-screen bg-white">
                <header className="bg-white flex flex-row justify-between items-center text-black h-[50px] font-semibold px-[20px] z-10">
                    <Link to="/">
                        <span className="mr-[7px] font-bold">←</span> Back
                    </Link>
                    <DropBox
                        elements={[
                            "HEX (#AA1923)",
                            "HEX (AA1923)",
                            "RGB - (1, 2, 3)",
                            "RGBA - (1, 2, 3, 0.4)",
                        ]}
                        chooseCallback={setColorType}
                    />
                    <SoundToggle callback={setSoundState} />
                </header>
                <div className="flex-grow">
                    <div
                        className="absolute w-[100%] h-[calc(100%-100px)] top-[50px]"
                        onClick={copyColorAction}
                    >
                        {thisPalette.colors.map((color) => (
                            <ColorBlock
                                inColor={color}
                                colorCallback={setColor}
                                colorTypeCallback={() =>
                                    Object.values(colorType)[getColorType]
                                }
                            />
                        ))}
                    </div>
                </div>
                <footer className="bg-white flex flex-col items-end justify-center text-black h-[50px] font-semibold px-[20px] z-10">
                    <div>
                        {thisPalette.paletteName}
                        <span className="scale-150 ml-1">
                            {thisPalette.emoji}
                        </span>
                    </div>
                </footer>
                {fade && <CopiedMessage inColor={color} />}
            </div>
        </AnimatedPageTransition>
    );
}
