import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const useDropdown = () => {
  const [open, setOpen] = useState(false);
  return {
    open,
    bind: {
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false),
    },
    setOpen,
  };
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dropdown state for Use cases and Resources
  const useCasesDropdown = useDropdown();
  const resourcesDropdown = useDropdown();

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-xl">
      <div className="relative flex flex-row md:h-[88px] h-16 items-center px-9 md:px-13 lg:px-16 mx-auto max-w-[1280px]">
        <a
          className="flex flex-row justify-start items-center gap-4 p-4 -m-4 cursor-pointer pr-9 pt-2"
          aria-label="Anara logo"
          aria-roledescription="Anara logo"
          href="/"
        >
          <svg
            className=" w-[64px]"
            xmlns="http://www.w3.org/2000/svg"
            width="487"
            height="138"
            viewBox="0 0 487 138"
            fill="none"
          >
            <path
              fill="#000"
              d="M432.758 137.312c-7.965 0-14.581-1.348-19.848-4.046-5.268-2.698-9.186-6.295-11.755-10.792-2.57-4.496-3.854-9.378-3.854-14.645 0-6.167 1.541-11.498 4.625-15.994 3.211-4.497 7.9-7.965 14.067-10.406 6.166-2.57 13.746-3.855 22.739-3.855h24.473c0-5.138-.706-9.378-2.12-12.718-1.413-3.468-3.597-6.038-6.551-7.708-2.955-1.67-6.745-2.505-11.37-2.505-5.267 0-9.764 1.22-13.489 3.661-3.726 2.313-6.038 5.91-6.937 10.792h-22.739c.77-6.938 3.083-12.847 6.937-17.73 3.854-5.01 8.928-8.863 15.223-11.561 6.424-2.827 13.425-4.24 21.005-4.24 9.121 0 16.894 1.606 23.317 4.818 6.424 3.083 11.305 7.58 14.646 13.49 3.468 5.78 5.202 12.782 5.202 21.004V135h-19.655l-2.313-15.609c-1.284 2.569-2.954 4.946-5.01 7.13-1.927 2.184-4.175 4.111-6.744 5.781-2.57 1.542-5.525 2.762-8.865 3.662-3.212.899-6.873 1.348-10.984 1.348Zm5.203-18.306c3.726 0 7.002-.643 9.828-1.927 2.955-1.414 5.46-3.341 7.515-5.781 2.184-2.57 3.854-5.396 5.011-8.479 1.156-3.084 1.927-6.36 2.312-9.828v-.386h-21.39c-4.496 0-8.222.578-11.177 1.735-2.955 1.027-5.074 2.57-6.359 4.625-1.285 2.055-1.927 4.432-1.927 7.13 0 2.697.642 5.01 1.927 6.937 1.285 1.927 3.148 3.404 5.588 4.432 2.441 1.028 5.332 1.542 8.672 1.542ZM335.354 135V37.878h20.619l2.12 18.114c2.313-4.24 5.203-7.837 8.672-10.791 3.468-3.084 7.515-5.46 12.14-7.13 4.753-1.67 9.956-2.506 15.609-2.506V60.04h-8.093c-3.855 0-7.516.513-10.985 1.541-3.468.9-6.487 2.441-9.057 4.625-2.441 2.056-4.368 4.946-5.781 8.672-1.413 3.597-2.119 8.157-2.119 13.682V135h-23.125ZM268.637 137.312c-7.965 0-14.581-1.348-19.849-4.046-5.267-2.698-9.185-6.295-11.754-10.792-2.57-4.496-3.854-9.378-3.854-14.645 0-6.167 1.541-11.498 4.624-15.994 3.212-4.497 7.901-7.965 14.068-10.406 6.166-2.57 13.746-3.855 22.739-3.855h24.473c0-5.138-.707-9.378-2.12-12.718-1.413-3.468-3.597-6.038-6.552-7.708-2.954-1.67-6.744-2.505-11.369-2.505-5.267 0-9.764 1.22-13.489 3.661-3.726 2.313-6.038 5.91-6.938 10.792h-22.739c.771-6.938 3.084-12.847 6.938-17.73 3.854-5.01 8.928-8.863 15.223-11.561 6.424-2.827 13.425-4.24 21.005-4.24 9.121 0 16.893 1.606 23.317 4.818 6.423 3.083 11.305 7.58 14.645 13.49 3.469 5.78 5.203 12.782 5.203 21.004V135h-19.655l-2.313-15.609c-1.285 2.569-2.955 4.946-5.01 7.13-1.927 2.184-4.175 4.111-6.745 5.781-2.569 1.542-5.524 2.762-8.864 3.662-3.212.899-6.873 1.348-10.984 1.348Zm5.203-18.306c3.725 0 7.001-.643 9.828-1.927 2.954-1.414 5.46-3.341 7.515-5.781 2.184-2.57 3.854-5.396 5.01-8.479 1.157-3.084 1.927-6.36 2.313-9.828v-.386h-21.39c-4.497 0-8.222.578-11.177 1.735-2.955 1.027-5.074 2.57-6.359 4.625-1.285 2.055-1.927 4.432-1.927 7.13 0 2.697.642 5.01 1.927 6.937 1.285 1.927 3.147 3.404 5.588 4.432 2.441 1.028 5.332 1.542 8.672 1.542ZM131.526 135V37.878h20.426l1.735 16.187c2.954-5.653 7.194-10.15 12.718-13.49s12.076-5.01 19.656-5.01c7.836 0 14.517 1.67 20.041 5.01 5.524 3.212 9.764 7.966 12.718 14.26 3.084 6.296 4.625 14.132 4.625 23.51V135h-23.124V80.465c0-8.093-1.799-14.324-5.396-18.692s-8.928-6.552-15.994-6.552c-4.625 0-8.8 1.092-12.526 3.276-3.597 2.184-6.488 5.396-8.672 9.635-2.055 4.111-3.083 9.121-3.083 15.03V135h-23.124ZM.818 135 50.15.108h25.822L125.304 135H100.83L62.868 27.086 24.905 135H.818Zm21.968-31.796 6.166-18.307h66.483l6.166 18.307H22.786Z"
            ></path>
          </svg>
        </a>
        <nav className="hidden md:flex items-center space-x-[6px]  lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          {/* Use cases dropdown */}
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative z-10 flex max-w-max flex-1 items-center justify-center"
            {...useCasesDropdown.bind}
          >
            <div style={{ position: "relative" }}>
              <ul
                data-orientation="horizontal"
                className="group flex flex-1 list-none items-center justify-center space-x-2"
                dir="ltr"
              >
                <li className="relative">
                  <button
                    id="use-cases-trigger"
                    aria-expanded={useCasesDropdown.open}
                    aria-controls="use-cases-dropdown"
                    className={`group inline-flex w-max items-center justify-center rounded-4 bg-transparent p-3 px-4 text-sm transition-colors hover:bg-accent data-[state=open]:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-[505] leading-5 antialiased select-none text-black`}
                    type="button"
                  >
                    Use cases{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-down relative top-[1px] ml-2 h-6 w-6 transition duration-200 ${
                        useCasesDropdown.open ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  {useCasesDropdown.open && (
                    <motion.div
                      id="use-cases-dropdown"
                      className="absolute left-0 top-full mt-2 min-w-[180px] bg-white shadow-lg rounded-lg py-2 px-2 z-20 border border-gray-100"
                      onMouseEnter={useCasesDropdown.bind.onMouseEnter}
                      onMouseLeave={useCasesDropdown.bind.onMouseLeave}
                      initial={{
                        opacity: 0,
                        y: 0,
                        rotateX: "-90deg",
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "top",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: "0deg",
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "top",
                      }}
                      exit={{
                        opacity: 0,
                        y: 0,
                        rotateX: "-90deg",
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "top",
                      }}
                      transition={{ duration: 0.35, ease: [0.4, 0.2, 0.2, 1] }}
                    >
                      <a
                        href="/use-cases/marketing"
                        className="block px-5 py-2 text-sm text-gray-900 rounded-sm hover:bg-gray-100"
                      >
                        Marketing
                      </a>
                      <a
                        href="/use-cases/sales"
                        className="block px-5 py-2 text-sm text-gray-900 rounded-sm hover:bg-gray-100"
                      >
                        Sales
                      </a>
                      <a
                        href="/use-cases/support"
                        className="block px-5 py-2 text-sm text-gray-900 rounded-sm hover:bg-gray-100"
                      >
                        Support
                      </a>
                    </motion.div>
                  )}
                </li>
              </ul>
            </div>
          </nav>
          {/* Resources dropdown */}
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative z-10 flex max-w-max flex-1 items-center justify-center"
            {...resourcesDropdown.bind}
          >
            <div style={{ position: "relative" }}>
              <ul
                data-orientation="horizontal"
                className="group flex flex-1 list-none items-center justify-center space-x-2"
                dir="ltr"
              >
                <li className="relative">
                  <button
                    id="resources-trigger"
                    aria-expanded={resourcesDropdown.open}
                    aria-controls="resources-dropdown"
                    className={`group inline-flex w-max items-center justify-center rounded-4 bg-transparent p-3 px-4 text-sm transition-colors hover:bg-accent data-[state=open]:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-[510] leading-5 antialiased select-none text-black`}
                    type="button"
                  >
                    Resources{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-down relative top-[1px] ml-2 h-6 w-6 transition duration-200 ${
                        resourcesDropdown.open ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  {resourcesDropdown.open && (
                    <motion.div
                      id="resources-dropdown"
                      className="absolute left-0 top-full mt-2 min-w-[180px]  bg-white shadow-lg rounded-lg py-2 px-2 z-20 border border-gray-100"
                      onMouseEnter={resourcesDropdown.bind.onMouseEnter}
                      onMouseLeave={resourcesDropdown.bind.onMouseLeave}
                      initial={{
                        opacity: 0,
                        y: 0,
                        rotateX: "-90deg",
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "top",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: "0deg",
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "top",
                      }}
                      exit={{
                        opacity: 0,
                        y: 0,
                        rotateX: "-90deg",
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                        transformOrigin: "top",
                      }}
                      transition={{ duration: 0.35, ease: [0.4, 0.2, 0.2, 1] }}
                    >
                      <a
                        href="/resources/blog"
                        className="block px-5 py-2 text-sm text-gray-900 rounded-sm hover:bg-gray-100"
                      >
                        Blog
                      </a>
                      <a
                        href="/resources/docs"
                        className="block px-5 py-2 text-sm text-gray-900 rounded-sm hover:bg-gray-100"
                      >
                        Documentation
                      </a>
                      <a
                        href="/resources/webinars"
                        className="block px-5 py-2 text-sm text-gray-900 rounded-sm hover:bg-gray-100"
                      >
                        Webinars
                      </a>
                    </motion.div>
                  )}
                </li>
              </ul>
            </div>
          </nav>
          <button
            aria-busy="false"
            className="inline-flex items-center relative justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-black hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground px-4 py-2 h-9.5 rounded-5 gap-3 font-[510] leading-5 antialiased select-none"
          >
            <span className="truncate">Pricing</span>
          </button>
          <button
            aria-busy="false"
            className="inline-flex items-center relative justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-black hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground px-4 py-2 h-9.5 rounded-5 gap-3 font-[510] leading-5 antialiased select-none"
          >
            <span className="truncate">Careers</span>
          </button>
          <button
            aria-busy="false"
            className="inline-flex items-center relative justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-black hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground px-4 py-2 h-9.5 rounded-5 gap-3 font-[510] leading-5 antialiased select-none"
          >
            <span className="truncate">Contact sales</span>
          </button>
        </nav>
        <div className="hidden md:flex items-center ml-auto">
          <div className="flex flex-row gap-5">
            <button
              aria-busy="false"
              className="inline-flex items-center relative justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border bg-secondary text-secondary-foreground hover:bg-secondary-hover h-9.5 rounded-5 gap-3 font-[550] select-none !rounded-full px-6 py-3"
            >
              <span className="truncate">Log in</span>
            </button>
            <button
              aria-busy="false"
              className="inline-flex items-center relative justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border h-9.5 rounded-5 gap-3 font-[550] select-none bg-black text-muted hover:bg-black/90 !rounded-full px-6 py-3"
            >
              <span className="truncate">Get Anara free</span>
            </button>
          </div>
        </div>
        <div className="ml-auto md:hidden">
          <button
            aria-busy="false"
            className="inline-flex items-center relative justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground h-11 w-11 rounded-4 md:hidden font-[550] select-none"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-_R_iapfiv5a5b_"
            data-state="closed"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="truncate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu h-7 w-7"
                aria-hidden="true"
              >
                <path d="M4 12h16"></path>
                <path d="M4 18h16"></path>
                <path d="M4 6h16"></path>
              </svg>
              <span className="sr-only">Toggle menu</span>
            </span>
          </button>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"}`}
        data-radix-popper-content-wrapper=""
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          transform: "translate(0px, 45.75px)",
          minWidth: "max-content",
          willChange: "transform",
          zIndex: 50,
          // Custom CSS variables
          ["--radix-popper-transform-origin" as any]: "50% 0px",
          ["--radix-popper-available-width" as any]: "360px",
          ["--radix-popper-available-height" as any]: "694.1999998092651px",
          ["--radix-popper-anchor-width" as any]: "28px",
          ["--radix-popper-anchor-height" as any]: "28px",
        }}
      >
        <div
          data-side="bottom"
          data-align="center"
          data-state="open"
          role="dialog"
          id="radix-_r_er_"
          className="z-50 rounded-6 border border-border-primary text-text-primary bg-popover p-2 shadow-feint outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 md:hidden w-[90vw] mx-[5vw] left-0"
          tabIndex={-1}
          style={{
            ["--radix-popover-content-transform-origin" as any]:
              "var(--radix-popper-transform-origin)",
            ["--radix-popover-content-available-width" as any]:
              "var(--radix-popper-available-width)",
            ["--radix-popover-content-available-height" as any]:
              "var(--radix-popper-available-height)",
            ["--radix-popover-trigger-width" as any]:
              "var(--radix-popper-anchor-width)",
            ["--radix-popover-trigger-height" as any]:
              "var(--radix-popper-anchor-height)",
          }}
        >
          <div className="flex flex-col">
            <button
              aria-busy="false"
              className="inline-flex items-center relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground py-2 h-9.5 rounded-5 gap-3 justify-start px-4 text-sm font-[550] select-none"
            >
              <span className="truncate">Log in</span>
            </button>
            <button
              aria-busy="false"
              className="inline-flex items-center relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground py-2 h-9.5 rounded-5 gap-3 justify-between px-4 text-sm font-[550] select-none"
            >
              <span className="truncate">Use cases</span>
              <span className="ml-auto">
                <span className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
              </span>
            </button>
            <button
              aria-busy="false"
              className="inline-flex items-center relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground py-2 h-9.5 rounded-5 gap-3 justify-between px-4 text-sm font-[550] select-none"
            >
              <span className="truncate">Resources</span>
              <span className="ml-auto">
                <span className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
              </span>
            </button>
            <button
              aria-busy="false"
              className="inline-flex items-center relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground py-2 h-9.5 rounded-5 gap-3 justify-start px-4 text-sm font-[550] select-none"
            >
              <span className="truncate">Pricing</span>
            </button>
            <button
              aria-busy="false"
              className="inline-flex items-center relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground py-2 h-9.5 rounded-5 gap-3 justify-start px-4 text-sm font-[550] select-none"
            >
              <span className="truncate">Careers</span>
            </button>
            <button
              aria-busy="false"
              className="inline-flex items-center relative whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 box-border text-text-primary hover:bg-control-primary data-[highlighted]:bg-popover-hover data-[highlighted]:text-accent-foreground data-[state=open]:bg-popover-hover data-[state=highlighted]:bg-popover-hover group-data-[highlighted]:bg-popover-hover group-data-[highlighted]:text-accent-foreground group-focus:bg-popover-hover group-focus:text-accent-foreground py-2 h-9.5 rounded-5 gap-3 justify-start px-4 text-sm font-[550] select-none"
            >
              <span className="truncate">Contact sales</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
