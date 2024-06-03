import Link from "next/link";
import { ImMenu } from "react-icons/im";
import { navigationLinks } from "../database/navigationLinks";

const HeaderDropdown = () => {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
                <ImMenu className="w-5 h-5 text-neutral" />
            </div>

            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 text-accent rounded-box w-56">
                {navigationLinks.map(({ name, link }) => (
                    <li key={name}>
                        <Link href={link}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderDropdown;