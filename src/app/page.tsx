import { Metadata } from "next";
import Image from "next/image";
import ajuda from "../assets/img/ajuda.gif"
import clinico from "../assets/img/clinico.png"
import pediatria from "../assets/img/pediatria.png"
import cirurgia from "../assets/img/cirurgia.png"
import Link from "next/link";
import caboFrio from "../assets/img/cabo-frio.png";
import araruama from "../assets/img/araruama.png";
import buzios from "../assets/img/buzios.png";
import arraial from "../assets/img/arraial.png";
import rioDeJaneiro from "../assets/img/rio-de-janeiro.png";
import iguaba from "../assets/img/iguaba-grande.png";
import saoPedro from "../assets/img/sao-pedro.png";



export const metadata: Metadata = {
  title: "Icabofrio - ONG",
  description: "ONG voltlada para ajudar o povo",
};

export default function Home() {
  return (
    <main>
      <section >
        <div className="container mx-auto text-center md:text-start">
          <div className="flex flex-col justify-between md:flex-row p-4 gap-4">
            <div id="text" className="flex text-center md:text-start flex-col md:justify-around gap-10 md:gap-0">
              <h2 className="text-3xl lg:text-6xl max-w-2xl font-bold text-green-900">Descubra como podemos ajudar você
                a ter mais qualidade de vida.</h2>
              <p className="max-w-xl md:my-2 text-md">Saiba como nossas soluções podem transformar seu bem-estar e proporcionar mais satisfação no dia a dia.</p>
              <Link className="flex mx-auto md:mx-0 items-center justify-center md:w-72 w-full h-20 bg-orange-600 text-xl md:text-2xl text-white p-3 font-bold hover:bg-slate-300 hover:text-orange-600 hover:scale-110 transition-all" href="https://wa.me/5522998051770"> Saiba Mais</Link>

            </div>
            <Image src={ajuda} className="md:max-w-sm lg:max-w-xl xl:max-w-3xl" alt="ajudamos você da melhor forma" />

          </div>
        </div>
      </section>

      <section className="my-16" id="sobre">
        <div className="container p-5 flex justify-between flex-col md:flex-row mx-auto gap-5">
          <div className="text-center md:text-start">
            <h2 className="text-green-900 font-bold text-3xl md:text-4xl">O que é o Instituto Icabofrio?</h2>
            <p className="text-green-950 text-md">Somos uma instituição privada, sem fins lucrativos, que atua em
              parceria formal com o Estado e colabora de forma complementar,
              para a consolidação do Sistema Único de Saúde – SUS, conforme
              previsto em sua Lei Orgânica – Lei nº 8080/90, planejado e efetivado
              em consonância com as diretrizes da Lei Federal nº 9.637, de 15 de
              maio de 1998, e Leis Estaduais e Municipais vigentes que dispõem
              sobre a qualificação de entidades de Organização Social, e rege-se
              pelo presente Estatuto Social, Qualificação, Regimento Interno e
              pelas disposições legais aplicáveis</p>
          </div>
          <div className="text-center md:text-end">
            <h2 className="text-green-900 font-bold text-3xl mt-5 md:mt-0 md:text-4xl">O PROPÓSITO</h2>
            <p className="text-green-950 text-md">O pilar estrutural do Instituto Icabofrio tem como finalidade única
              garantir a qualidade absoluta no produto ofertado em gestão de
              saúde, com excelência reconhecida em qualidade, mantendo a
              união, alinhamento e competências garantidas, com funcionalidade
              das estruturas organizacionais interligadas e em sintonia contínua,
              resultando no alcance da visão da Instituição no que se refere a
              satisfação aos clientes, responsabilidade social, excelência em
              gestão de qualidade dos serviços de saúde, compromisso com
              resultados, confiabilidade, transparência, resiliência e
              humanização</p>
          </div>
        </div>
      </section>

      <section >
        <div className="cursor-pointer container flex flex-col md:flex-row mx-auto justify-between gap-5 p-10">
          <div className="flex text-center md:w-80  flex-col items-center justify-center p-10 gap-3 transition-all hover:scale-110 bg-slate-200 shadow-xl rounded">
            <Image src={clinico} width={100} height={100} alt="" />
            <h2 className="font-bold text-3xl" >Clínico Geral</h2>

          </div>

          <div className="cursor-pointer flex text-center md:w-80 flex-col items-center justify-center p-10 gap-3 transition-all hover:scale-110 bg-slate-200 shadow-xl  rounded">
            <Image src={pediatria} width={100} height={100} alt="" />
            <h2 className="font-bold text-3xl" >Pediatria</h2>

          </div>

          <div className="cursor-pointer flex text-center md:w-80 flex-col items-center justify-center p-10 gap-3 transition-all hover:scale-110 bg-slate-200 shadow-xl rounded">
            <Image src={cirurgia} width={100} height={100} alt="" />
            <h2 className="font-bold text-3xl" >Cirurgia Geral</h2>

          </div>

        </div>
      </section>


      <section className="text-center my-10 p-2">
        <h2 className="font-bold text-2xl md:text-4xl  text-green-900 mb-5">O INSTITUTO ICABOFRIO REALIZA</h2>
        <div className="container mx-auto flex flex-col md:flex-row text-center gap-3 justify-center">
          <div className="bg-orange-600 max-w-96 md:w-96 p-10 flex items-center justify-center mx-auto">
            <p className="font-bold text-white">Transporte UTI aéreo, serviço contratado e pago pela Secretária Estadual da Saúde de Tocantins (SESAU-TO)
            </p>
          </div>
          <div className="bg-green-600 max-w-96  md:w-96 px-20 py-10 md:py-10 md:px-10 flex items-center justify-center  mx-auto">
            <p className="font-bold text-white">Cirurgias Cardíacas Pediátricas</p>
          </div>
          <div className="bg-orange-600 max-w-96 md:w-96 p-10 flex items-center justify-center mx-auto">
            <p className="font-bold text-white">Sopro Sistólico  Cardiopatia Congênita Complexa</p>
          </div>
          <div className="bg-green-600 max-w-96 md:w-96 p-10 flex items-center justify-center mx-auto">
            <p className="font-bold text-white">Cirurgia Cardíaca Pediátrica para fechamento de canal arterial</p>
          </div>
        </div>
      </section>

      <section className="text-center my-32 p-2">
        <h2 className="font-bold text-2xl md:text-4xl  text-green-900 mb-12">Qualificações e Credenciamentos</h2>
        <div className="container mx-auto flex flex-col md:flex-row text-center md:gap-48 flex-wrap gap-16 justify-center ">
          <figure className="flex flex-col justify-center items-center">
            <Image src={caboFrio} width={200} height={200} alt="Bandeira de Cabo frio" />
            <figcaption className="text-2xl mt-2 font-bold text-green-600">
              Cabo Frio
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center">
            <Image src={araruama} width={200} height={200} alt="Bandeira de Araruama" />
            <figcaption className="text-2xl mt-2 font-bold text-green-600">
              Araruama
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center">
            <Image src={iguaba} width={200} height={200} alt="Bandeira de Iguaba" />
            <figcaption className="text-2xl mt-2 font-bold text-green-600">
              Iguaba
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center">
            <Image src={rioDeJaneiro} width={200} height={200} alt="Bandeira de Estado do Rio de Janeiro" />
            <figcaption className="text-2xl mt-2 font-bold text-green-600">
              Estado do Rio de Janeiro
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center">
            <Image src={saoPedro} width={200} height={200} alt="Bandeira de São Pedro" />
            <figcaption className="text-2xl mt-2 font-bold text-green-600">
              São Pedro
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center">
            <Image src={buzios} width={200} height={200} alt="Bandeira de Buzios" />
            <figcaption className="text-2xl mt-2 font-bold text-green-600">
              Buzios
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center">
            <Image src={arraial} width={200} height={200} alt="Bandeira de Arraial do Cabo" />
            <figcaption className="text-2xl mt-2 font-bold text-green-600">
              Arraial do Cabo
            </figcaption>
          </figure>

        </div>
      </section>
    </main>
  );
}


/*  */