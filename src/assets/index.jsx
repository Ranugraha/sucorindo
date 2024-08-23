import Logo from "./Logo.png";
import ArrowDown from "./chevron-down.png";

function DropDown({className}) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const assets = { Logo, ArrowDown };
export const icons = { DropDown };

export const menu_list_navbar = [
  {
    name: "menu 1",
    to: "/",
  },
  {
    name: "menu 2",
    to: "/expert",
  },
  {
    name: "menu 3",
    to: "/about-us",
  },
  {
    name: "blog",
    to: "/",
  },
  {
    name: "menu 5",
    to: "/",
  },
];
