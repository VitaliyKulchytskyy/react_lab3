const Palette = ({ palette }) => {
    const maxColors = 20;
    return (
        <div
            className="block relative h-[200px] bg-white rounded-[4px] px-[10px] pt-[9px] 
                       transition-all duration-200 shadow-sm hover:cursor-pointer"
        >
            <div className="w-[100%] h-[150px] float-left rounded-[4px]">
                {palette.colors.map((color, index) => (
                    <>
                        {index < maxColors && (
                            <div
                                className="h-1/4 w-[20%] block float-left"
                                style={{ background: color.color }}
                                key={index}
                            >
                                &shy;
                            </div>
                        )}
                    </>
                ))}
            </div>
            <div className="absolute bottom-0 text-black mb-2 w-[100%]">
                <div className="inline-block">
                    <div className="inline-block font-semibold">
                        {palette.paletteName}
                    </div>
                    <div className="inline-block absolute right-6 scale-125">
                        {palette.emoji}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Palette;
