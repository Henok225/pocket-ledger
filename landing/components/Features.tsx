import { Feature } from "@/types/content";
import FeatureCard from "./FeatureCard";


interface Props {
  items: Feature[];
}


export default function Features({
  items
}: Props) {


  return (

    <section className="py-16">


      <h2 className="text-3xl font-bold text-center mb-10">
        Features
      </h2>


      <div
        className="
          grid
          md:grid-cols-3
          gap-8
        "
      >

        {
          items.map((feature) => (

            <FeatureCard
              key={feature.title}
              feature={feature}
            />

          ))
        }

      </div>


    </section>

  );
}