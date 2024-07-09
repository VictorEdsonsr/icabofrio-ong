
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../../assets/img/logo.svg";

export const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    const nav = [
        { name: "Início", link: "/" },
        { name: "Sobre Nós", link: "/sobre" },
        { name: "Contatos", link: "/contato" },
    ];

    return (
        <>

            <nav className="flex justify-between items-center">
                <Image className="md:hidden" src={logo} width={200} height={200} alt="logo da ONG Icabofrio" />
                <ul className={openNavbar ?
                    " md:hidden pt-28 pr-32 h-screen fixed z-50 top-0 bottom-0 right-0 left-0 flex items-center justify-around flex-col bg-green-800 text-white translate-x-[25%] w-full transition ease-in-out delay-500"
                    : "md:hidden pt-28 pr-32 h-screen fixed z-50 top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-around translate-x-[100%] w-full transition ease-in-out delay-500"}>

                    <div className="flex md:hidden flex-row  w-9/12 mx-auto">
                        <div className="flex justify-around items-center w-full">
                            <FaEnvelope size={23} className="text-orange-600 " />
                            <FaWhatsapp size={25} className="text-orange-600" />
                            <FaInstagram size={25} className="text-orange-600 mr-3" />
                            <FaFacebook size={23} className="text-orange-600" />
                        </div>
                    </div>

                    {nav.map((navLink, index) => (
                        <Link key={index} href={navLink.link}>
                            <li
                                onClick={() => setOpenNavbar(openNavbar ? !openNavbar : openNavbar)}
                                className="p-3 cursor-pointer font-mons text-xl mx-4 hover:text-white hover:bg-orange-500 rounded-full transition"
                            >
                                {navLink.name}
                            </li>
                        </Link>
                    ))}
                </ul>

                <div onClick={() => setOpenNavbar(!openNavbar)} className="cursor-pointer">
                    <div
                        className={openNavbar ?
                            "md:hidden flex w-8 h-1 bg-transparent rounded-md transition ease-in-out delay-500 z-50 fixed right-6 top-20 translate-x-[-50px] m-10 before:content-[''] before:absolute before:w-8 before:h-1 before:bg-white before:rounded-md before:transition before:ease-in-out before:delay-500 before:translate-x-[70px] before:translate-y-[-30px] before:rotate-[45deg] after:content-[''] after:absolute after:w-8 after:h-1 after:bg-white after:rounded-md after:transition after:ease-in-out after:delay-500 after:translate-x-[70px] after:translate-y-[-30px] after:rotate-[-45deg]" :
                            "md:hidden flex w-8 h-1 bg-black rounded-md transition ease-in-out delay-500 z-50 float-right m-10 before:content-[''] before:absolute before:w-8 before:h-1 before:bg-black before:rounded-md before:transition before:ease-in-out before:delay-500 before:translate-y-[-10px] after:content-[''] after:absolute after:w-8 after:h-1 after:bg-black after:rounded-md after:transition after:ease-in-out after:delay-500 after:translate-y-[10px]"}
                    />
                </div>


            </nav>



            <nav className="hidden md:flex md:container md:mx-auto md:justify-between md:items-center">
                <Image src={logo} width={250} height={250} alt="logo da ONG Icabofrio" />
                <ul className="flex mx-auto">
                    {nav.map((navLink, index) => (
                        <Link key={index} href={navLink.link}>
                            <li
                                onClick={() => setOpenNavbar(openNavbar ? !openNavbar : openNavbar)}
                                className="p-3 px-10 text-2xl cursor-pointer font-mons mx-4 hover:text-white hover:bg-orange-500 rounded-full transition"
                            >
                                {navLink.name}
                            </li>
                        </Link>
                    ))}

                </ul>

                <Link className="flex items-center bg-orange-600 text-white p-3 font-bold rounded-md hover:bg-slate-300 hover:text-orange-600 hover:scale-110 transition-all" href="https://wa.me/5522998051770"> <FaWhatsapp className="mr-2" size={25} /> Fale Conosco</Link>

            </nav>
        </>

    );
};

/**   */