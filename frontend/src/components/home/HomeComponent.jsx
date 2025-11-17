import HeaderComponent from "../header/HeaderComponent";
import CardPizza from '../card/CardPizza.jsx';
import { useEffect, useState } from "react";

export default function HomeComponent() {
  const [pizzas, setPizzas] = useState([]);
  //leyendo .env para obtener URL de la API
  const urlAPI = import.meta.env.VITE_API_URL;

  //funcion patra obtener datos de la API
  async function fetchPizzas() {
    try {
      const response = await fetch(urlAPI);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error('Se produjo un error al obtener datos de la API:', error);
    }
  }

  //llamada a funcion para cargar las pizzas en el montaje del componente
  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <>
      <HeaderComponent />
      <section className="pizzagallery">
          {pizzas.map(({desc,id,img,ingredients,name,price})=>(
            <CardPizza 
              key={id}
              desc={desc}
              id={id}
              img={img}
              ingredients={ingredients}
              name={name}
              price={price}
            />
          ))}
      </section>
    </>
  )
}
