'use client';
import logo from "../assets/img/logo.svg";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa"
import Navbar from "./Components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import WhatsappButton from "./Components/WhatsappButton/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-Br">
      <body className={inter.className}  >
        <header className="h-10 p-6 bg-green-600 text-white hidden md:flex" >
          <div className="container flex flex-row justify-between w-full  mx-auto">
            <div className="flex flex-row justify-center items-center">

              <Link className="flex flex-row justify-center items-center mr-5" href="mailto:icabofriosaudevoluntaria@gmail.com">
                <span className="bg-orange-600 rounded-full p-2 flex flex-col justify-center items-center  mr-2"> <FaEnvelope className="text-white " /></span> icabofriosaudevoluntaria@gmail.com
              </Link>

              <Link href="https://wa.me/5522998051770" className="flex flex-row justify-center items-center">
                <span className="bg-orange-600 rounded-full p-2 flex flex-col justify-center items-center  mr-2"><FaWhatsapp size={20} className="text-white " /></span> (22) 9 9805-1770
              </Link>
            </div>
            <div className="flex flex-row justify-center items-center">
              <Link className="bg-orange-600 rounded-full p-2 flex flex-col justify-center items-center mr-3" href="https://www.instagram.com/icabofriosaudevoluntaria/">
                <FaInstagram size={20} className="text-white " />
              </Link>
              <span className="bg-orange-600 rounded-full p-2 flex flex-col justify-center items-center" >
                <FaFacebook size={20} className="text-white" />
              </span>
            </div>
          </div>
        </header>

        <Navbar />
        {children}
        <WhatsappButton />

        <footer id="contato" className="bg-green-600 ">
          <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-white p-3 text-center md:text-start">
            <div >
              <Image className="mx-auto md:mx-0" src={logo} width={200} height={200} alt="" />
              <p className="max-w-md mt-[-30px]">Encontre as melhores estratégias para melhorar sua saúde e bem-estar com nossa ajuda especializada.</p>
              <div className="flex gap-5 text-3xl my-5">

              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-7">Contatos</h2>
              <ul className="flex flex-col">
                <li className="flex gap-2 md:text-xl mb-4" >
                  <Link href="https://wa.me/5522998051770" className="flex flex-row justify-center items-center">
                    <FaWhatsapp size={20} className="text-orange-600 mr-1" /> (22) 9 9805-1770
                  </Link>
                </li>
                <li className="flex gap-2 md:text-xl" >
                  <Link className="flex flex-row justify-center items-center mr-5" href="mailto:icabofriosaudevoluntaria@gmail.com">
                    <FaEnvelope className="text-orange-600 mr-2" /> icabofriosaudevoluntaria@gmail.com
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
