import {
  AiFillInfoCircle as AboutIcon,
  AiFillHome as HomeIcon,
} from "react-icons/ai";

import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={HomeIcon} />
        <MenuItem title="ABOUT" address="/about" Icon={AboutIcon} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-300 py-1 px-2 rounded-lg mr-1 dark:text-gray-800">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
