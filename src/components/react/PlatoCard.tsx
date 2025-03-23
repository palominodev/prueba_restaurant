type Props = {
  nombre: string;
  description: string;
  precio: number;
  img: string;
};
export const PlatoCard = ({ nombre, description, precio, img }: Props) => {
  return (
    <article className="border p-2 rounded-lg shadow-md">
      <figure>
        <img src={img} alt={`plato de ${nombre}`} width={250} height={250} />
        <figcaption>
          <h3 className="font-bold text-center">{nombre}</h3>
          {/* <p>{description}</p> */}
          <p className="text-center mb-4">Precio: s/{precio}</p>
        </figcaption>
      </figure>
    </article>
  );
};
