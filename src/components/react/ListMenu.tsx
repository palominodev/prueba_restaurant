import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { PlatoCard } from "./PlatoCard";
import CevicheIMG from "/public/ceviche_card.jpg";
import TiraditoIMG from "/public/tiradito_card.jpg";
import CausaIMG from "/public/causa_card.jpg";
import AnticuchoIMG from "/public/anticucho.webp";

import LomoSaltadoIMG from "/public/lomo_saltado.avif";
import AjiGallinaIMG from "/public/aji_gallina_card.webp";
import SecoFrejolesIMG from "/public/seco_frejoles_card.jpg";
import ArrozPolloIMG from "/public/arrozconpollo_card.png";

import SuspiroLimena from "/public/suspiro_limena_card.jpg";
import MazamorraMorada from "/public/mazamorra_morada_card.webp";
import ArrozLeche from "/public/arroz_con_leche.avif";
import TurronPepa from "/public/turron_dona_pepa.jpg";

import ChichaMorada from "/public/chicha_morada.jpg";
import InkaKola from "/public/inca_kola.webp";
import PiscoSour from "/public/pisco-sour_card.jpg";
import Chilcano from "/public/chilcano_card.jpg";

export const ListMenu = () => {
  const menu = [
    {
      category: "entradas",
      items: [
        { name: "Ceviche", description: "Pescado fresco con limón", price: 15, img: CevicheIMG },
        { name: "Tiradito", description: "Pescado fresco con limón", price: 12, img: TiraditoIMG },
        { name: "Causa", description: "Papa amarilla con ají", price: 10, img: CausaIMG },
        { name: "Anticucho", description: "Corazón de res", price: 8, img:AnticuchoIMG},
      ],
    },
    {
      category: "platos principales",
      items: [
        { name: "Lomo saltado", description: "Carne de res con verduras", price: 20, img: LomoSaltadoIMG },
        { name: "Aji de gallina", description: "Gallina con ají amarillo", price: 18, img: AjiGallinaIMG },
        { name: "Seco con frejoles", description: "Carne de res con frejoles", price: 15, img: SecoFrejolesIMG },
        { name: "Arroz con pollo", description: "Pollo con arroz", price: 12, img: ArrozPolloIMG },
      ],
    },
    {
      category: "postres",
      items: [
        { name: "Suspiro a la limeña", description: "Dulce de leche con merengue", price: 8, img: SuspiroLimena },
        { name: "Mazamorra morada", description: "Maíz morado con frutas", price: 6, img: MazamorraMorada },
        { name: "Arroz con leche", description: "Arroz con leche", price: 5, img: ArrozLeche },
        { name: "Turrón de doña Pepa", description: "Dulce de harina con miel", price: 4, img: TurronPepa },
      ],
    },
    {
      category: "bebidas",
      items: [
        { name: "Chicha morada", description: "Maíz morado", price: 4, img: ChichaMorada },
        { name: "Inka Kola", description: "Gaseosa de sabor", price: 3, img: InkaKola },
        { name: "Pisco sour", description: "Pisco con limón", price: 6, img: PiscoSour },
        { name: "Chilcano", description: "Pisco con ginger ale", price: 7, img: Chilcano },
      ],
    },
  ];

  return (
    <div className="w-full">
      <Tabs defaultValue="entradas">
        <TabsList className="flex w-full overflow-x-auto gap-2 justify-center border-b pb-2 mb-4">
          <TabsTrigger className="whitespace-nowrap" value="entradas">
            Entradas
          </TabsTrigger>
          <TabsTrigger className="whitespace-nowrap" value="platos principales">
            Platos principales
          </TabsTrigger>
          <TabsTrigger className="whitespace-nowrap" value="postres">
            Postres
          </TabsTrigger>
          <TabsTrigger className="whitespace-nowrap" value="bebidas">
            Bebidas
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="entradas"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {menu[0].items.map((item) => (
            <PlatoCard
              key={item.name}
              nombre={item.name}
              img={item.img}
              description={item.description}
              precio={item.price}
            />
          ))}
        </TabsContent>
        <TabsContent
          value="platos principales"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {menu[1].items.map((item) => (
            <PlatoCard
              key={item.name}
              nombre={item.name}
              img={item.img}
              description={item.description}
              precio={item.price}
            />
          ))}
        </TabsContent>
        <TabsContent
          value="postres"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {menu[2].items.map((item) => (
            <PlatoCard
              key={item.name}
              nombre={item.name}
              img={item.img}
              description={item.description}
              precio={item.price}
            />
          ))}
        </TabsContent>
        <TabsContent
          value="bebidas"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {menu[3].items.map((item) => (
            <PlatoCard
              key={item.name}
              nombre={item.name}
              img={item.img}
              description={item.description}
              precio={item.price}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
