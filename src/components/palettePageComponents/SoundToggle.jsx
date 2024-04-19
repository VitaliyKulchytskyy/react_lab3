import { useEffect, useState } from "react";

export default function SoundToggle({ callback }) {
    const soundToggleMessage = (state) => {
        return state ? "Sound On 🔊" : "Sound off 🔇";
    };

    const [getToggle, toggle] = useState(true);
    useEffect(() => {
        callback(getToggle);
    }, [getToggle]);

    return (
        <div onClick={() => toggle(!getToggle)} className="cursor-pointer">
            {soundToggleMessage(getToggle)}
        </div>
    );
}
