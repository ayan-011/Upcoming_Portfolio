import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who is this course for?",
    answer:
      "This is for creators, freelancers, and anyone ready to turn their creativity into a sustainable career, whether you're starting from scratch or looking to level up.",
  },
  {
    question: "Do I need expensive gear to start?",
    answer:
      "Not at all. Most of what you'll learn works with a phone and free software. We'll show you how to get professional results with the tools you already have before talking about any upgrades.",
  },
  {
    question: "How long is the course?",
    answer:
      "The core curriculum is about 6 hours of video, broken into short lessons you can move through at your own pace. Most people finish in 2-3 weeks alongside their regular schedule.",
  },
  {
    question: "What makes this course different from others?",
    answer:
      "It's built around a real, repeatable system rather than one-off tips. Every module ties back to actual client work and income, not just theory or inspiration.",
  },
  {
    question: "Can I take this course while working a full-time job?",
    answer:
      "Yes. Lessons are short and self-paced, and most students spend 3-5 hours a week on it. You can go faster or slower depending on how much time you have.",
  },
  {
    question: "Will this work for my niche?",
    answer:
      "The framework is niche-agnostic, it's about the underlying business and creative skills, so it applies whether you're in photography, design, writing, video, or something else entirely.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen w-full bg-[#EEECE6] px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
        {/* Left column */}
        <div>
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl">
            Everything You Need to Know Before You Start
          </h2>
          <p className="mt-8 max-w-xs text-[15px] leading-relaxed text-neutral-800">
            Here's the lowdown on how the Creator Blueprint works, what
            you'll get, and how it can help you. If you don't see your
            question here, just reach out, I'm happy to help.
          </p>
        </div>

        {/* Right column: accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                onClick={() => toggle(index)}
                className="cursor-pointer rounded-2xl border border-neutral-300/70 bg-[#F6F5F1] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                <div
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 px-8 py-7 text-left"
                >
                  <span className="text-2xl font-medium leading-snug text-neutral-900 md:text-[26px]">
                    {item.question}
                  </span>
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center text-neutral-900">
                    <Plus
                      className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      strokeWidth={1.75}
                    />
                  </span>
                </div>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-8 text-[17px] leading-relaxed text-neutral-500 md:pr-16">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}