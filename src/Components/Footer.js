import React from "react";
function Footer() {
  return (
    // <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
    // <footer className="container mx-auto py-1 fixed bottom-0 flex justify-center bg-white dark:bg-dark-mode">
    <footer
      className="container mx-auto py-1 fixed bottom-0 flex justify-center items-center bg-white dark:bg-dark-mode"
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        {/* Designed with {" "}
        <span className="text-gradient font-medium"> Love</span>  */}
        Designed by{" "}
        <a
          className="font-medium"
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text-gradient font-medium">Shashikumar Vanga</span>
        </a>
      </p>
    </footer>
  );
}
export default Footer;
