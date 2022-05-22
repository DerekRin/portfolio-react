import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description:
        "My name is Derek A. Rincones. I hope you enjoy going through my portfolio!",
    },
    {
      name: "Quest Board",
      description:
        "Group Project Two of my bootcamp experience. For this project my group and I came together to make a video game fourm website. With me once again, responsible for the layout design and other front-end application.",
    },
    {
      name: "Wyvern",
      description:
        "To relieve stress, I often try and express myself via creativity. With Wyvern being my main creative focus and outlet for the stressful days I come across. One day I hope to release this little artistic piece as a video game one day, using the coding knowledge I gain from my coding bootcamp.",
    },
    {
      name: "Calorie Counter",
      description:
        "Group Project One of my coding bootcamp experience. Where me and three other students came together to create a Calorie Counter App! I was responsible for the front-end portion. Mostly the layout design, colors, and mobile function. Check it out here https://mickieburch.github.io/Calorie-counter/? !",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
