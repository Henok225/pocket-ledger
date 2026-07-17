import { HeroContent } from "@/types/content";


interface Props {
  content: HeroContent;
}


export default function Hero({
  content
}: Props) {

  return (
    <section className="text-center py-20">

      <h1 className="text-5xl font-bold tracking-tight">
        {content.title}
      </h1>


      <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
        {content.subtitle}
      </p>


     <a
 href="http://localhost:5173"
 className="
   mt-8
   inline-block
   bg-blue-600
   text-white
   px-8
   py-3
   rounded-lg
 "
>
 {content.buttonText}
</a>


    </section>
  );
}