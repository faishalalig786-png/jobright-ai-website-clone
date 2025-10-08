"use client";

import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    value: "item-1",
    question: "How is Jobright different from other job platforms like LinkedIn?",
    answer: "The most unique thing about Jobright.ai is that it accompanies you on your job search, unlike LinkedIn and Indeed where you’re on your own.\n\nWith Jobright, it’s like having an experienced career coach guiding you towards your next dream role. Our platform saves you hours through built-in automation for every step of the job search, making the process more efficient and tailored to your needs.",
  },
  {
    value: "item-2",
    question: "Will Jobright share my personal information?",
    answer: "No, Jobright is committed to protecting your privacy. We do not sell or share your personal data with third parties for marketing purposes. Your information is only used to enhance your job search experience on our platform as outlined in our Privacy Policy.",
  },
  {
    value: "item-3",
    question: "Is Jobright free to use?",
    answer: "Yes, Jobright offers a robust free tier that includes AI job matching and resume analysis. We also provide premium features for users who want to accelerate their job search with more advanced capabilities. You can start for free and upgrade anytime.",
  },
  {
    value: "item-4",
    question: "Where do Jobright's job listings come from?",
    answer: "Jobright aggregates job listings from multiple sources across the web, including direct partnerships with employers and other major job boards. Our AI then vets and categorizes these listings to ensure you get access to high-quality, relevant opportunities.",
  },
  {
    value: "item-5",
    question: "What regions does Jobright's service cover?",
    answer: "Currently, Jobright primarily focuses on job opportunities within the United States, Canada, and select global tech hubs. We are continuously working to expand our coverage to more regions worldwide.",
  },
  {
    value: "item-6",
    question: "I have more questions!",
    answer: "We're here to help! If you have any other questions, please feel free to reach out to our support team at support@jobright.ai or visit our help center for more information.",
  },
];

const FaqSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[900px] px-6">
        <h2 className="text-center text-[40px] font-bold leading-[48px] text-black mb-12">
          Frequently
          <br />
          Asked Questions
        </h2>
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
          {faqData.map((item) => (
            <AccordionItem value={item.value} key={item.value} className="border-b border-gray-200">
              <AccordionTrigger className="group flex w-full items-center justify-between py-5 text-left text-lg font-medium text-black hover:no-underline">
                <span className="flex-1">{item.question}</span>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e3d8d80-b08b-4cb3-9437-db5e251ea40d-jobright-ai/assets/svgs/arr_down-13.svg?"
                  alt="arrow down"
                  width={20}
                  height={20}
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                />
              </AccordionTrigger>
              <AccordionContent className="pb-5 pt-0">
                <div className="space-y-4 text-base leading-7 text-gray-500">
                  {item.answer.includes("support@jobright.ai") ? (
                    <p>
                      We're here to help! If you have any other questions, please feel free to reach out to our support team at <a href="mailto:support@jobright.ai" className="text-blue-accent underline">support@jobright.ai</a> or visit our help center for more information.
                    </p>
                  ) : (
                    item.answer.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;