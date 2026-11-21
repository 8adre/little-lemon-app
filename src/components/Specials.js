import React from "react";
import { Link } from "react-router-dom";

const SPECIALS_DATA = [
  {
    id: "greek-salad",
    title: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image:
      "https://unsplash.com",
    alt: "Fresh Greek salad with feta cheese, olives, tomatoes, and cucumbers",
  },
  {
    id: "bruschetta",
    title: "Bruschetta",
    price: "$ 5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image:
      "https://unsplash.com",
    alt: "Grilled bruschetta topped with diced tomatoes, basil, and olive oil",
  },
  {
    id: "lemon-dessert",
    title: "Lemon Dessert",
    price: "$ 5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image:
      "https://unsplash.com",
    alt: "Layered lemon cake dessert garnished with whipped cream",
  },
];

const Specials = () => {
  return (
    <section className="specials-section container" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This weeks specials!</h2>
        <Link to="/menu" className="btn-primary" role="button">
          Online Menu
        </Link>
      </div>

      <div className="specials-grid">
        {SPECIALS_DATA.map((item) => (
          <article key={item.id} className="special-card">
            <img src={item.image} alt={item.alt} className="card-img" />
            <div className="card-body">
              <div className="card-title-row">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p className="card-desc">{item.description}</p>
              <Link
                to="/order-online"
                className="order-link"
                aria-label={`Order ${item.title} for delivery`}
              >
                Order a delivery <span aria-hidden="true">🛵</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;
