"use client";

import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="border-y border-white/10 py-12">
      <form
        className="mx-auto flex w-full max-w-[32.875rem] flex-col items-center gap-6"
      >
        <div className="flex w-full max-w-[26.875rem] flex-col items-center gap-2">
          <h2 className="text-center text-lg font-extrabold text-green-200">
            Want to Talk?
          </h2>
          <p className="text-balance text-center text-sm font-medium">
            Feel free to email me at{" "}
            <Link
              className="font-bold leading-relaxed text-accent transition-colors hover:text-accent/80"
              href="mailto:kotamrajunischal101@gmail.com"
              target="_blank"
            >
              kotamrajunischal101@gmail.com
            </Link>
            !
          </p>
        </div>
      </form>
    </section>
  );
};

export default Contact;
