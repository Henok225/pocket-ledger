import { Feature } from "@/types/content";


interface Props {
  feature: Feature;
}


export default function FeatureCard({
  feature
}: Props) {

  return (

    <div
      className="
        bg-white
        rounded-xl
        shadow
        p-6
        text-center
      "
    >

      <div className="text-4xl">
        {feature.icon}
      </div>


      <h3 className="text-xl font-bold mt-4">
        {feature.title}
      </h3>


      <p className="text-gray-600 mt-2">
        {feature.description}
      </p>


    </div>

  );
}