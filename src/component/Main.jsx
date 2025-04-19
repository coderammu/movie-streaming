import React from "react";

export default function Main() {
  return (
    <div className="w-full  container mx-auto main flex flex-col justify-center">
      <div className="lg:w-1/2 w-full flex flex-col justify-center  lg:pl-16 pl-9">
        <h1 className="text-white font-bold text-5xl pb-4">
          Spider Man
          <br /> No Way Home
        </h1>
        <p className="text-white">
          Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu
          felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor
          imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...
        </p>
        <div className="flex gap-4 pt-3">
          <a
            href="https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_no%2520way"
            className="text-white border px-3 py-2 rounded-lg text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Watch Tailor
          </a>
          <a
            href="https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_no%2520way"
            className="text-black border px-3 py-2 bg-yellow-400 rounded-lg text-sm "
            target="_blank"
            rel="noreferrer"
          >
            Watch Movie
          </a>
        </div>
      </div>
    </div>
  );
}
