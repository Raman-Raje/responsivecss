import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer } from "flowbite-react";
import "./Footer.css";

const StyledFooter = () => {
  return (
    <>
      <Footer container className="footer">
        <div className="w-full">
          <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                className="text-white font-bold text-2xl brand-name"
                href="https://flowbite.com"
                name=""
              >
                Medyzer
              </Footer.Brand>
            </div>
            <div className="grid gap-8 ">
              <Footer.Title className="text-white" title="about" />
            </div>
          </div>
          {/* <Footer.Divider /> */}
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              className="text-white"
              by="Medyzer™"
              href="#"
              year={2022}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
              <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
              <Footer.Icon href="#" icon={BsGithub} className="text-white" />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default StyledFooter;
