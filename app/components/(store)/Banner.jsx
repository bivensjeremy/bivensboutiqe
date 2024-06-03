
import Transition from "@/app/lib/Transition";
import Tagline from "../Tagline";
import { parisienne_font } from "@/app/lib/fonts";

const Banner = ({ title }) => {
    const bannerTitle = (title === undefined) ? 'Shop Our Collection' : title

    return (
        <div className="hero bg-secondary h-60 overflow-hidden">
            <div className="hero-content mt-12 absolute drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <Tagline text={bannerTitle} />
            </div>

            <Transition durationTime={0.9}>
                <p className={`${parisienne_font.className} text-[15rem] text-accent/50 text-nowrap flex-col text-center m-auto h-full flex justify-center`}>
                            {bannerTitle}
                        </p>
            </Transition>
            
        </div>

    );
}

export default Banner;