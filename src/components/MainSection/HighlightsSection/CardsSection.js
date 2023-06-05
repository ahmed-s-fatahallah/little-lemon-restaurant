import greekSalad from "./../../../assets/greek salad.jpg";
import bruchetta from "./../../../assets/bruchetta.jpg";
import lemonDessert from "./../../../assets/lemon dessert.jpg";
import deliveryIcon from "./../../../assets/motorbike.png";
import Card from "./Card";

import classes from "./CardsSection.module.css";

const CardsSection = () => {
  return (
    <div className={classes.cards}>
      <Card
        src={greekSalad}
        alt="restaurant greek salad dish"
        title="Greek Salad"
        price="$12.99"
        text="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        href="#"
        linkText="Order a delivery"
        iconSrc={deliveryIcon}
        iconAlt="delivery Icon"
      />
      <Card
        src={bruchetta}
        alt="restaurant bruchetta dish"
        title="Brutchetta"
        price="$5.99"
        text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        href="#"
        linkText="Order a delivery"
        iconSrc={deliveryIcon}
        iconAlt="delivery Icon"
      />
      <Card
        src={lemonDessert}
        alt="restaurant lemon desert cake"
        title="Lemon Dessert"
        price="$5.00"
        text="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        href="#"
        linkText="Order a delivery"
        iconSrc={deliveryIcon}
        iconAlt="delivery Icon"
      />
    </div>
  );
};

export default CardsSection;
