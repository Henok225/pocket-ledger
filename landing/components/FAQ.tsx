import { FaqItem } from "@/types/content";


interface Props {
  items: FaqItem[];
}


export default function FAQ({
  items
}: Props) {

  return (

    <section className="py-16 max-w-3xl mx-auto">


      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>


      <div className="space-y-6">

        {items.map((item) => (

          <div
            key={item.question}
            className="
              bg-white
              rounded-xl
              shadow
              p-6
            "
          >

            <h3 className="text-lg font-bold">
              {item.question}
            </h3>


            <p className="mt-2 text-gray-600">
              {item.answer}
            </p>


          </div>

        ))}

      </div>


    </section>

  );
}