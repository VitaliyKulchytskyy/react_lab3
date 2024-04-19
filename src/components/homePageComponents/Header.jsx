export const Header = () => {
    return (
        <div className="h-[65px] block text-left relative">
            <div
                className="text-white text-[27px] absolute left-2 bottom-5 text-lg font-bold tracking-wider 
                           transition-all duration-200 transform origin-left"
            >
                FLAT UI COLORS 2
            </div>
            <div className="absolute right-0 bottom-2 mr-[2px] tracking-wide font-bold">
                <div className="headerBlock">
                    Designer Insipiration <span className="bg-red-600 text-[14px] font-bold rounded-[4px] ml-2 mr-[2px] mb-[2px] mt-[2px] px-1">NEW </span>
                </div>
                <div className="headerBlock">
                    Subscribe
                </div>
            </div>
        </div>
    );
};
