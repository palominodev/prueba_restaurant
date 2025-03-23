import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { PlatoCard } from "./PlatoCard";

export const ListMenu = () => {
  const menu = [
    {
      category: "entradas",
      items: [
        {
          name: "Ceviche",
          description: "Pescado fresco con limón",
          price: 15,
        },
        {
          name: "Tiradito",
          description: "Pescado fresco con limón",
          price: 12,
        },
        {
          name: "Causa",
          description: "Papa amarilla con ají",
          price: 10,
        },
        {
          name: "Anticucho",
          description: "Corazón de res",
          price: 8,
        },
      ],
    },
    {
      category: "platos principales",
      items: [
        {
          name: "Lomo saltado",
          description: "Carne de res con verduras",
          price: 20,
        },
        {
          name: "Aji de gallina",
          description: "Gallina con ají amarillo",
          price: 18,
        },
        {
          name: "Seco con frejoles",
          description: "Carne de res con frejoles",
          price: 15,
        },
        {
          name: "Arroz con pollo",
          description: "Pollo con arroz",
          price: 12,
        },
      ],
    },
    {
      category: "postres",
      items: [
        {
          name: "Suspiro a la limeña",
          description: "Dulce de leche con merengue",
          price: 8,
        },
        {
          name: "Mazamorra morada",
          description: "Maíz morado con frutas",
          price: 6,
        },
        {
          name: "Arroz con leche",
          description: "Arroz con leche",
          price: 5,
        },
        {
          name: "Turrón de doña Pepa",
          description: "Dulce de harina con miel",
          price: 4,
        },
      ],
    },
    {
      category: "bebidas",
      items: [
        {
          name: "Chicha morada",
          description: "Maíz morado",
          price: 4,
        },
        {
          name: "Inka Kola",
          description: "Gaseosa de sabor",
          price: 3,
        },
        {
          name: "Pisco sour",
          description: "Pisco con limón",
          price: 6,
        },
        {
          name: "Chilcano",
          description: "Pisco con ginger ale",
          price: 7,
        },
      ],
    },
  ];
  return (
    <div className="flex justify-center">
      <Tabs defaultValue="entradas" className="">
        <TabsList className="flex justify-center w-full">
          <TabsTrigger className="" value="entradas">Entradas</TabsTrigger>
          <TabsTrigger value="platos principales">
            Platos principales
          </TabsTrigger>
          <TabsTrigger value="postres">Postres</TabsTrigger>
          <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
        </TabsList>
        <TabsContent
          value="entradas"
          className="flex gap-8 justify-center flex-wrap"
        >
          {menu[0].items.map((item) => (
            <PlatoCard
              key={item.name}
              nombre={item.name}
              img="https://via.placeholder.com/250"
              description={item.description}
              precio={item.price}
            />
          ))}
        </TabsContent>
        <TabsContent
          value="platos principales"
          className="flex gap-8 justify-center flex-wrap"
        >
          {menu[1].items.map((item) => (
            <PlatoCard
              key={item.name}
              nombre={item.name}
              img="https://via.placeholder.com/250"
              description={item.description}
              precio={item.price}
            />
          ))}
        </TabsContent>
        <TabsContent
          value="postres"
          className="flex gap-8 justify-center flex-wrap"
        >
          {menu[2].items.map((item) => (
			<PlatoCard
			  key={item.name}
			  nombre={item.name}
			  img="https://via.placeholder.com/250"
			  description={item.description}
			  precio={item.price}
			/>
		  ))}
        </TabsContent>
        <TabsContent
          value="bebidas"
          className="flex gap-8 justify-center flex-wrap"
        >
          {menu[3].items.map((item) => (
			<PlatoCard
			  key={item.name}
			  nombre={item.name}
			  img="https://via.placeholder.com/250"
			  description={item.description}
			  precio={item.price}
			/>
		  ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
