import { getRandomMessage } from "../../utils/randomMessage";

export default function CopiedMessage({ inColor }) {
    const rndMessage = getRandomMessage();
    return (
        <div
            className="absolute flex h-[100%] w-[100%] slide-out-bck-center z-20"
            style={{ background: inColor.hex }}
        >
            <div
                className="h-[15%] flex flex-col justify-center items-center relative top-[45%] w-[100%]"
                style={{ background: "rgba(255,255,255, 0.5)" }}
            >
                <div className="drop-shadow-md uppercase text-[64px] font-bold mt-[20px]">
                    {rndMessage}
                </div>
                <div className="relative top-[120px] font-semibold drop-shadow-lg text-[24px]">
                    {inColor.converted}
                </div>
            </div>
        </div>
    );
}
