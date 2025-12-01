import { createContext, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  //estado para almacenar las pizzas obtenidas de la API
  const [pizzas, setPizzas] = useState([]);

  //estado para almacenar una pizza individual
  const [pizza, setPizza] = useState([]);

  //leyendo .env para obtener URL de la API
  const urlAPI = import.meta.env.VITE_API_URL;
  
  //funcion para obtener las pizzas de la API
  async function fetchPizzas() {
    try {
      const response = await fetch(urlAPI);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error('Se produjo un error al obtener datos de la API:', error);
    }
  }

   //funcion patra obtener una pizza individual de la API
    async function fetchPizza(idpizza) {
      try {
        const response = await fetch(urlAPI + '/' + idpizza);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Se produjo un error al obtener datos de la API:', error);
      }
    }

  return (
    <PizzaContext.Provider value={{ pizzas, fetchPizzas, pizza, fetchPizza }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;