import React from "react";
import RellaxWrapper from "../Rellax";
const Home = () => {
  return (
    <div className="home">
      <RellaxWrapper speed={-2}>
        <div className="rellax">I am that default chill speed of "-2"</div>
      </RellaxWrapper>
      <RellaxWrapper speed={7}>
        <div className="rellax">I am super fast!!</div>
      </RellaxWrapper>
      <RellaxWrapper speed={-4}>
        <div className="rellax">I am extra slow and smooth</div>
      </RellaxWrapper>
      <RellaxWrapper
        class="rellax"
        data-rellax-speed="7"
        data-rellax-xs-speed="-5"
        data-rellax-mobile-speed="3"
        data-rellax-tablet-speed="-8"
        data-rellax-desktop-speed="1"
      >
        I parallax at all different speeds depending on your screen width.
      </RellaxWrapper>
    </div>
  );
};
export default Home;
