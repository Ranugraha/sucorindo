import Logo from "./Logo.png";
import ArrowDown from "./chevron-down.png";
import ImgOneAboutUs from "./balazs-busznyak-El5zuQAtfeo-unsplash 1.png";
import ImgtwoAboutUs from "./ring_road.png";
import ImgThreeAboutUs from "./ship_conteiners.png";
import ImgfourAboutUs from "./plane _with_sunset.png";

function FbNormal({ className }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_41_654)">
        <path
          d="M30.2339 32.0001C31.2091 32.0001 32 31.2094 32 30.234V1.76612C32 0.790625 31.2091 0 30.2339 0H1.76612C0.7905 0 0 0.790625 0 1.76612V30.234C0 31.2094 0.7905 32.0001 1.76612 32.0001H30.2339Z"
          fill="#395185"
        />
        <path
          d="M22.0794 32V19.6079H26.239L26.8618 14.7785H22.0794V11.695C22.0794 10.2968 22.4678 9.34388 24.4729 9.34388L27.0303 9.34276V5.02338C26.5878 4.96451 25.0698 4.83301 23.3038 4.83301C19.6165 4.83301 17.0923 7.08363 17.0923 11.2169V14.7785H12.922V19.6079H17.0923V32H22.0794Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_41_654">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function YtNormal({ className }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="2" fill="red" />
      <path
        d="M16.0765 6.99854H16.21C17.443 7.00304 23.6905 7.04804 25.375 7.50104C25.8842 7.63929 26.3483 7.90877 26.7207 8.28255C27.0932 8.65633 27.361 9.12131 27.4975 9.63103C27.649 10.201 27.7555 10.9555 27.8275 11.734L27.8425 11.89L27.8755 12.28L27.8875 12.436C27.985 13.807 27.997 15.091 27.9985 15.3715V15.484C27.997 15.775 27.9835 17.146 27.8755 18.574L27.8635 18.7315L27.85 18.8875C27.775 19.7455 27.664 20.5975 27.4975 21.2245C27.3615 21.7345 27.0938 22.1997 26.7212 22.5735C26.3487 22.9474 25.8844 23.2167 25.375 23.3545C23.635 23.8225 17.0215 23.8555 16.105 23.857H15.892C15.4285 23.857 13.5115 23.848 11.5015 23.779L11.2465 23.77L11.116 23.764L10.8595 23.7535L10.603 23.743C8.938 23.6695 7.3525 23.551 6.622 23.353C6.11273 23.2153 5.6486 22.9462 5.27609 22.5726C4.90358 22.1991 4.63577 21.7342 4.4995 21.2245C4.333 20.599 4.222 19.7455 4.147 18.8875L4.135 18.73L4.123 18.574C4.04897 17.5576 4.00795 16.5391 4 15.52L4 15.3355C4.003 15.013 4.015 13.8985 4.096 12.6685L4.1065 12.514L4.111 12.436L4.123 12.28L4.156 11.89L4.171 11.734C4.243 10.9555 4.3495 10.1995 4.501 9.63103C4.63704 9.12111 4.90474 8.6559 5.27727 8.28206C5.6498 7.90822 6.11405 7.63887 6.6235 7.50104C7.354 7.30604 8.9395 7.18604 10.6045 7.11104L10.8595 7.10054L11.1175 7.09154L11.2465 7.08704L11.503 7.07654C12.9306 7.0306 14.3587 7.00509 15.787 7.00004H16.0765V6.99854ZM13.6 11.8135V19.0405L19.8355 15.4285L13.6 11.8135Z"
        fill="white"
      />
    </svg>
  );
}

function DropDown({ className }) {
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

export const assets = {
  Logo,
  ArrowDown,
  ImgOneAboutUs,
  ImgtwoAboutUs,
  ImgThreeAboutUs,
  ImgfourAboutUs,
};
export const icons = { DropDown, YtNormal, FbNormal };

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
