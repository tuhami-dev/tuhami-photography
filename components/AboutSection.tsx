import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="py-24 bg-stone-50"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.2fr] gap-12 items-center">
          <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl bg-stone-200 shadow-lg">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://photos.smugmug.com/photos/i-xRGC8kD/0/KtgRvd9dX3LrGVgNJ2GkNmvvLHdKrz6LPBTQFHHsr/X4/i-xRGC8kD-X4.jpg"
                alt="Anas from Tuhami Photography"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={false}
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <h2
              id="about-title"
              className="font-display text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-5"
            >
              Meet Your Photographer
            </h2>

            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              <p>
                Hi, I’m Anas, the photographer behind Tuhami Photography.
              </p>
              <p>
                I specialize in clean, natural, and timeless photography for families,
                couples, professionals, and athletes across the Phoenix metro area. My
                goal is simple. Create images that feel authentic, confident, and effortless.
              </p>
              <p>
                Photography started as a creative outlet, but it quickly became something
                more. With a background in UX design and product strategy, I approach every
                session with intention. Lighting, composition, and small details matter.
                Those details are what elevate a photo from good to frame worthy.
              </p>
              <p>
                I do not believe in stiff poses or rushed sessions. I focus on creating a
                relaxed environment so you feel comfortable in front of the camera. When you
                feel comfortable, the best moments happen naturally.
              </p>
              <p>
                Whether you are booking family photos, engagement portraits, personal
                branding images, or sports photography, I will guide you through the process
                so it feels simple from start to finish.
              </p>
              <p>
                If you are looking for high quality images with a clean and modern look,
                I would love to work with you.
              </p>
            </div>

            <p className="mt-6 font-semibold text-stone-900 text-base sm:text-lg">
              Let’s create something you will be proud to share.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-black/10 transition-colors hover:bg-brand-hover"
              >
                Book a session
              </a>

              <p className="mt-4 text-xs sm:text-sm text-stone-500">
                Guided posing &nbsp;•&nbsp; Clean, natural edits &nbsp;•&nbsp; Phoenix metro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
