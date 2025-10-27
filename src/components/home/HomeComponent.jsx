import HeaderComponent from "../header/HeaderComponent";
import CardComponent from '../card/CardComponent.jsx';
export default function HomeComponent() {
  return (
    <>
      <HeaderComponent />
      <section className="pizzagallery">
          <CardComponent 
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="napolitana.jpg"    
          />
          <CardComponent 
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="espanola.jpg"  
          />
          <CardComponent 
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="pepperoni.jpg"    
          />
      </section>
    </>
  )
}
