import React from "react";

import StatCard from "./components/StatCard";
import HotProjectCard from "./components/HotProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import NotSoHotCard from "./components/NotSoHotCard";

const HomePage = () => {
  const hotProjects = [1, 2, 3, 4, 5];

  const closeToFund = [1, 2, 3, 4, 5, 6, 7];

  return (
    <main className="flex flex-col items-center w-full h-full py-10 gap-y-8 px-2 md:px-32">
      <section className="flex flex-col items-center w-full py-4">
        <h1 className="text-2xl font-bold hidden">Solrise</h1>
        <img src="/assets/solrise-logo-2.png" />
        <i className="text-base font-semibold text-lila-300 ">
          Your project will not stay a Figma!
        </i>
      </section>

      <section className="flex flex-wrap gap-3 justify-center">
        <StatCard statType="projects" />
        <StatCard statType="backers" />
        <StatCard statType="success" />
      </section>

      <section className="flex flex-col gap-y-5 w-full ">
        <h3 className="font-bold text-xl text-center">Hot Projects</h3>

        <Carousel className="">
          <CarouselContent>
            {hotProjects.map((value) => {
              return (
                <CarouselItem className="basis-1/2" key={value}>
                  <HotProjectCard />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="w-full flex flex-col  gap-y-3">
        <h4 className="font-semibold text-lg">Close to funding</h4>
        <Carousel>
          <CarouselContent>
            {closeToFund.map((value) => {
              return (
                <CarouselItem className="basis-1/3" key={value}>
                  <NotSoHotCard />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="w-full flex flex-col  gap-y-3">
        <h4 className="font-semibold text-lg">Recently Added</h4>
        <Carousel>
          <CarouselContent>
            {closeToFund.map((value) => {
              return (
                <CarouselItem className="basis-1/3" key={value}>
                  <NotSoHotCard />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
};

export default HomePage;
