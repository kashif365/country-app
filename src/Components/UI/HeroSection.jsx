import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">Explore the World One Contry At a Time</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur
            rerum suscipit consequuntur beatae doloribus dicta quis cum.
            Distinctio nulla ex corporis facilis quia incidunt iure illo unde
            dolores rerum!
          </p>
          <button className="btn btn-darken btn-inline btn-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world png"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
