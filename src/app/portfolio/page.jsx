"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/caderninhos com estampa.png",
    
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/carte portfolio.png",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/carton make ici.png",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Casque make ici.png",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Copie de camion make ici.png",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Copie de carte de visite make ici.png",
  },
  {
    id: 7,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Copie de Plan de travail 3.png",
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Copie de Vehicule 2 make ici.png",
  },
  {
    id: 9,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/dossier presse make ici.png",
  },
  {
    id: 9,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/le moulin midias_noel.png",
  },
  {
    id: 10,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/le moulin midias_nouvel anne.png",
  },
  {
    id: 11,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/le moulin midias_revue.png",
  },
  {
    id: 12,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/le moulin midias_valentines day.png",
  },
  {
    id: 13,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Mesa de trabajo 1.png",
  },
  {
    id: 14,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/moulin2.0-02.png",
  },
  {
    id: 15,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/moulin2.0-03.png",
  },
  {
    id: 16,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/moulin2.0-04.png",
  },
  {
    id: 17,
    color: "from-purple-300 to-red-300",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/newsletter.png",
  },
  {
    id: 18,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/panneau dentrée.png",
  },
  {
    id: 19,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/panneau make ici.png",
  },
  {
    id: 20,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Plan de travail 2 (2).png",
  },
  {
    id: 21,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/signaletique accueil.png",
  },
  {
    id: 22,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/TELE.png",
  },
  {
    id: 23,
    color: "from-purple-300 to-red-300",
    desc: "Nous avons eu comme demande de pouvoir améliorer l’application Veepee Voyage afin de la moderniser et que la tranche de 18 ans - 30 ans, puisse s’intéresser à la plate-forme tout en ingérant , une ia , nous avons essayé de ne pas réinventer l’intégralité de l’application car certains utilisateurs ont déjà certaines habitudes. nous avons juste choisi de l’optimiser en rajoutant une possibilité de trier par « Mood »pour les jeunes, ainsi que Famille, avec plein d’autres filtres qui pourront être intégrés au fur et à mesure de la clientèle, en fonction des éléments choisi nous génère en voyage idyllique nous sommes plus dans un mood de voyage sportif ‘pus allons sur « mood » et elle nous proposera, donc un voyage avec des activités. Car l’application ne s’arrête pas qu’au voyage, elle continue également pour les activités, ainsi que les restauration.",
    img: "/VEEPEEPORTFOLIO.png",
  },
  {
    id: 24,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Web 1920 – 1.png",
  },
  {
    id: 25,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/Web 1920 – 2.png",
  },
  {
    id: 26,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    video: "/ANIMATION 1.mp4",
  },
  {
    id: 27,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    video: "/ANIMATION 2.mp4",
  },
  {
    id: 28,
    color: "from-purple-300 to-red-300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    video: "/TouchDesigner 2022.31030_ C__Users_Sarah_Downloads_projet final.toe 2023-04-02 02-15-42.mp4",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-100%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-120vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Mes Projets
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                  {item.img && <Image src={item.img} alt="" fill />}
                  {item.video && (
                    <video  controls>
                      <source src={item.video} type="video/mp4" />
                    </video>)}
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">avez-vous un projet ?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                GRAPHISTE
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Engagez-moi
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
