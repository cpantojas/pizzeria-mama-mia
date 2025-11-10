import HeaderComponent from "../header/HeaderComponent";
import CardPizza from '../card/CardPizza.jsx';
import { pizzas } from "../../assets/pizzas.js";
export default function HomeComponent() {
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
