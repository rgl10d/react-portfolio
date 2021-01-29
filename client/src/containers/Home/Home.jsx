import React from "react";
import Parallax from "../../components/Parallax/Parallax";

const Home = () => {
    const classNames = {
        makeup: "bg-img-parallax portfolio1",
        reserve: "bg-img-parallax portfolio2",
        scheduler: "bg-img-parallax portfolio4",
        directory: "bg-img-parallax portfolio3",
    };
  return (
    <>
      <div className="row">
        <Parallax portfolio={classNames.directory} />
        <Parallax portfolio={classNames.makeup} />
        <Parallax portfolio={classNames.reserve} />
        <Parallax portfolio={classNames.scheduler} />
      </div>
    </>
  );
};

export default Home;
