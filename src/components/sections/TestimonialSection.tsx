import React from "react";
import Header from "../common/Header";
import { Separator } from "@/components/ui/separator";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const testimonialCardData = [
    {
      id: 0,
      name: "Emily Johnson",
      country: "USA, Texas",
      review:
        "Malik's photography doesn't just capture moments; it captures emotions. His work is simply mesmerizing.",
    },
    {
      id: 1,
      name: "John Smith",
      country: "USA, Texas",
      review:
        "Malik's photography doesn't just capture moments; it captures emotions. His work is simply mesmerizing.",
    },
    {
      id: 2,
      name: "Samantha",
      country: "USA, Texas",
      review:
        "I was blown away by Malik's ability to capture the essence of our wedding day. His photographs are our cherished memories.",
    },
  ];
  return (
    <section className="">
      <section className="flex justify-between gap-[1.25rem]">
        <div>
          <Header title="Testimonials" description="What My Clients Say" />
        </div>
      </section>

      {/* TODO: Add real review count once you have verified testimonials */}
      <Separator className="bg-lightDark my-8 mb-[2.5rem] md:mb-[5rem]" />
      <div className="grid grid-cols-1 xl:grid-cols-3 justify-between gap-[3.12rem] xl:flex-row mb-8">
        {testimonialCardData.map((review) => (
          <TestimonialCard
            name={review.name}
            key={review.id}
            country={review.country}
            review={review.review}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
