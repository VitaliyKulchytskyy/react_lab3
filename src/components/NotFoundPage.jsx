import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <>
            <div className="flex flex-col gap-2 justify-center items-center font-bold text-[64px] mt-10">
                I'm going back to 404...
                <Link to='/' className='italic font-normal'>Back to home</Link>
            </div>
        </>
    );
}
