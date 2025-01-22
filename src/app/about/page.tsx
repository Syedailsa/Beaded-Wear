import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="px-3 py-5">
        <h1 className="font-bold text-3xl lg:text-5xl mb-11 md:pl-10">
          About
          <span className="text-pink-600"> Us</span>
        </h1>
        <section
          className="flex md:text-left gap-3 place-items-center
                text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto"
        >
          <Image
            src="/ana.jpg"
            width={200}
            height={200}
            alt="author"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-pink-600">Anabiya Ubaid</h3>
            <p className="text-base text-gray-500">Founder of Beaded Wear</p>
          </div>
        </section>
        <p
          className="md:text-left
                text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
        >
          Beaded Wear is the creative vision of Anbiya Ubaid, a passionate
          dental technology student with a love for art and craftsmanship. What
          began as a personal escape into the vibrant world of beads soon
          transformed into a mission to share her creations with the world.
          <br />
          <br />
          Anbiya’s journey into bracelet making was born from her desire to
          balance the precision of her studies with the freedom of
          self-expression. Each piece she crafts reflects her meticulous
          attention to detail and her boundless creativity, blending colors,
          textures, and designs to create something truly unique.
          <br />
          <br />
          At Beaded Wear, we believe every bracelet tells a story of
          individuality, passion, and the joy of handmade artistry. Anbiya’s
          dream is to connect people through her work, one bead at a time,
          turning small moments of inspiration into cherished accessories for
          all.
          <br />
          <br />
          Thank you for being part of this journey and wearing not just a
          bracelet, but a piece of heartfelt art 💝
        </p>
      </div>
    </div>
  );
}

export default About;
