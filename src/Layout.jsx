import Header from "./Components/Header";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="relative flex flex-col max-h-screen">
      <Header />
      <div className="absolute right-0 -z-50 flex-grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1244"
          height="954"
          fill="none"
          viewBox="0 0 1244 954"
        >
          <path
            fill="url(#paint0_linear_9_2)"
            d="M256 478C104.4 397.2 22.5 118.667.5-10.5H1260l-15 964c-32 1.667-131.4-4.6-273-43-177-48-121.5-88.5-299-225.5S445.5 579 256 478z"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_9_2"
              x1="337"
              x2="1134"
              y1="-11"
              y2="994"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A7FFB5"></stop>
              <stop
                offset="0.75"
                stopColor="#3CFF5B"
                stopOpacity="0.323"
              ></stop>
              <stop offset="1" stopColor="#A7FFB5" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default Layout;
