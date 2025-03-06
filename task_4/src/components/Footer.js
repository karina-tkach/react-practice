import React from "react";
import Icon from "../assets/img/icon.png";

const Footer = () => {
    return (
        <footer className="bg-white border-t py-6 md:py-8 px-6 md:px-40">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="w-full text-center md:text-left">
                    <div className="flex items-center">
                        <img src={Icon} alt="Logo" className="w-[30px] h-[30px]" />
                        <h1 className="ml-5 text-lg font-semibold">Untitled UI</h1>
                    </div>
                    <nav className="mt-5 grid grid-cols-2 md:flex text-left md:flex-wrap md:justify-start gap-4 text-sm text-gray-600">
                        <FooterLink href="#" text="Overview" />
                        <FooterLink href="#" text="Features" />
                        <FooterLink href="#" text="Pricing" />
                        <FooterLink href="#" text="Careers" />
                        <FooterLink href="#" text="Help" />
                        <FooterLink href="#" text="Privacy" />
                    </nav>
                </div>

                <div className="mt-8 md:mt-0 text-left w-full md:w-1/3">
                    <h3 className="text-sm font-medium text-gray-700">Stay up to date</h3>
                    <SubscribeForm />
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row md:items-center items-start justify-between mt-6 border-t pt-4 text-center text-gray-500 text-xs">
                <p className="mt-2 md:mt-0">© 2077 Untitled UI. All rights reserved.</p>
                <div className="mt-2 md:mt-0 flex justify-center gap-4">
                    <FooterLink href="#" text="Terms" />
                    <FooterLink href="#" text="Privacy" />
                    <FooterLink href="#" text="Cookies" />
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ href, text }) => {
    return (
        <a href={href} className="hover:text-gray-900">
            {text}
        </a>
    );
};

const SubscribeForm = () => {
    return (
        <div className="mt-2 flex flex-col md:flex-row md:items-center items-start gap-2">
            <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded-lg text-sm md:w-64 w-full"
            />
            <button className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 md:w-64 w-full">
                Subscribe
            </button>
        </div>
    );
};

export default Footer;
