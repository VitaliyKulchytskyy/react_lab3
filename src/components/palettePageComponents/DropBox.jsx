import { useEffect, useState } from "react";

function DropList({ elements, chooseCallback }) {
    return (
        <ul className="z-10 top-4 bg-white relative text-[15px] font-semibold rounded-[3px] animation-droplist">
            {elements.map((elem, index) => (
                <li onClick={() => chooseCallback(index)} className="px-2 py-1 border-b-[1px] text-center hover:bg-black hover:text-white">{elem}</li>
            ))}
        </ul>
    );
}

export default function DropBox({ elements, chooseCallback = () => {} }) {
    const [isDrop, setDrop] = useState(false);
    const [chooseItem, setChooseItem] = useState(0);

    const getDropSymbol = (state) => {
        return state ? "▲" : "▼";
    };

    useEffect(() => {
        chooseCallback(chooseItem);
    }, [chooseItem]);

    return (
        <div
            onClick={() => setDrop(!isDrop)}
            className="relaitve w-[310px] h-[40px] font-semibold text-[16px] cursor-pointer"
        >
            <div className="flex flex-row justify-between bg-black text-white px-8 py-2 rounded-[4px]">
                <div>Copy format: {elements[chooseItem]}</div>
                <div>{getDropSymbol(isDrop)}</div>
            </div>
            {isDrop && (
                <DropList elements={elements} chooseCallback={setChooseItem} />
            )}
        </div>
    );
}
