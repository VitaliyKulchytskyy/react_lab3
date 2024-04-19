import { colorType, hexToType } from "../../utils/colorUtils";
import { setClipboard } from "../../utils/clipboardUtils";

export default function ColorBlock({
    inColor,
    colorCallback = () => {},
    colorTypeCallback = () => {
        return colorType.HexStr;
    },
}) {
    async function copyToClipboard() {
        const convertedColor = hexToType(inColor.color, colorTypeCallback());
        colorCallback({ hex: inColor.color, converted: convertedColor });
        await setClipboard(convertedColor);
    }

    return (
        <div
            className="w-[20%] h-[25%] relative float-left overflow-x-hidden uppercase"
            style={{ background: inColor.color }}
        >
            <div
                className="w-[100%] h-[100%] text-center text-white flex justify-center cursor-pointer
                           items-center opacity-0 hover:opacity-[.9] transition-all duration-300"
                onClick={copyToClipboard}
            >
                <div className="border px-10 py-2 rounded-md font-semibold">
                    copy
                </div>
            </div>
            <div className="absolute right-0 bottom-0 mr-2 mb-1 font-semibold opacity-[.9] ">
                {inColor.name}
            </div>
        </div>
    );
}
