import React from "react";
import Header from "../common/Header";
import { Separator } from "@/components/ui/separator";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  return (
    <section className="" id="services">
      <section className="flex justify-between flex-col md:flex-row gap-[1.25rem]">
        <div>
          <Header title="Services" description="My Photography Services" />
        </div>
      </section>
      <Separator className="bg-lightDark my-8 mb-[2.5rem] md:mb-[5rem]" />
      <ServiceCard />
    </section>
  );
}

export default ServiceSection;
