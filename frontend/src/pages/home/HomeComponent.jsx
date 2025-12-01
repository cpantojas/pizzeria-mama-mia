import HeaderComponent from "../../components/header/HeaderComponent.jsx";
import CardPizza from '../../components/card/CardPizza.jsx';
import { useContext, useEffect} from "react";
import { PizzaContext } from "../../context/PizzaContext.jsx";

export default function HomeComponent() {
  
  const {pizzas, fetchPizzas} = useContext(PizzaContext);

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
