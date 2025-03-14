import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Desktop5.module.css";

const slides = [
  { image: "image7.jpg" },
  { image: "image2.jpg" },
  { image: "image6.png" },
  { image: "image3.jpg" },
];

const menuItems = {
  Dessert: [
    { name: "Chocolate Cake", price: "₹420", image: "chocolate.jpg" },
    { name: "Ice Cream Sundae", price: "₹380", image: "Ice-Cream-Sundae.png" },
    { name: "Cheesecake", price: "₹500", image: "Cheesecake.jpg" },
    { name: "Brownie", price: "₹290", image: "chewy-brownies-SQUARE.png" },
  ],
  "Fast Food": [
    { name: "Cheeseburger", price: "₹650", image: "classic-cheeseburger.jpg" },
    { name: "Pepperoni Pizza", price: "₹850", image:"pizza.jpg" },
    { name: "French Fries", price: "₹200", image: "fries.jpg" },
    { name: "Chicken Nuggets", price: "₹520", image: "Chicken_Nuggets.jpg" },
  ],
  Drink: [
    { name: "Soda", price: "₹120", image: "soda.png" },
    { name: "Lemonade", price: "₹150", image: "blue-raspberry-lemonade-featured.jpg" },
    { name: "Iced Tea", price: "₹180", image: "iced-tea.png" },
    { name: "Jigarthanda", price: "₹80", image: "jigarthanda.jpg" },
  ],
};

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === "All"
      ? Object.values(menuItems).flat()
      : menuItems[selectedCategory];

  return (
    <div id="menuSection" className={styles.menu}>
      <h2 className={styles.menuHeader}>OUR MENU</h2>
      <p className={styles.menuSubtitle}>EAT.DRINK.LOVE</p>

      <div className={styles.menuButtons}>
        <button
          className={`${styles.menuButton} ${selectedCategory === "All" ? styles.active : ""}`}
          onClick={() => handleCategoryChange("All")}
        >
          ALL
        </button>
        <button
          className={`${styles.menuButton} ${selectedCategory === "Dessert" ? styles.active : ""}`}
          onClick={() => handleCategoryChange("Dessert")}
        >
          DESSERT
        </button>
        <button
          className={`${styles.menuButton} ${selectedCategory === "Fast Food" ? styles.active : ""}`}
          onClick={() => handleCategoryChange("Fast Food")}
        >
          FAST FOOD
        </button>
        <button
          className={`${styles.menuButton} ${selectedCategory === "Drink" ? styles.active : ""}`}
          onClick={() => handleCategoryChange("Drink")}
        >
          DRINK
        </button>
      </div>

      <div className={styles.menuGrid}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <img src={item.image} alt={item.name} className={styles.menuImage} />
              <div className={styles.itemDetails}>
                <span>{item.name}</span>
                <span className={styles.price}>{item.price}</span>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noItems}>No items available.</p>
        )}
      </div>
    </div>
  );
}

const AboutUs = () => {
  return (
    <section id="aboutsection" className={styles.aboutUs}>
      <h2 className={styles.header}>About Us</h2>
      <p className={styles.description}>
        Welcome to Cafestudio, where we serve delicious food and drinks made with love. Our mission is to provide a cozy atmosphere where you can enjoy your favorite meals with friends and family. 
        We believe in using the freshest ingredients to create mouth-watering dishes that will leave you coming back for more.
      </p>

      <div className={styles.contactDetails}>
        <h3>Contact Us</h3>
        <p>Email: contact@cafestudio.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Foodie Lane, Flavor Town, FT 12345</p>
      </div>

      <div className={styles.socialMedia}>
        <h3>Follow Us</h3>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
      </div>
    </section>
  );
}

function Desktop5() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className={styles.desktop5}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Cafestudio</h1>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.show : ""}`}>
          <li>
            <a href="#home" className={styles.navLink}>HOME</a>
          </li>
          <li>
            <a href="#menuSection" className={styles.navLink}>MENU</a>
          </li>
          <li>
            <a href="#aboutsection" className={styles.navLink}>ABOUT US</a>
          </li>
          <li>
            <a href="#search" className={styles.navLink}>LOG IN</a>
          </li>
        </ul>
      </nav>

      {/* Swiper Slider */}
      <div id="home" className={styles.sliderContainer}>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          navigation
         
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={styles.slideImage}
              />
              {index === 0 && (
                <div className={styles.textOverlay}>
                  <h2 className={styles.header}>
                    <span className={styles.highlight}>Hungry?</span> Wait no more!
                  </h2>
                  <p className={styles.subheader}>Enjoy delicious burgers and pizzas from the best restaurant</p>
                  <div className={styles.searchBox}>
                    <input 
                      type="text" 
                      placeholder="Search"
                      className={styles.searchInput} 
                    />
                    <button className={styles.orderButton}>Order Now</button>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Menu Component */}
      <Menu />
      <AboutUs />
    </main>
  );
}

export default Desktop5;