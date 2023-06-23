"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <LazyMotion features={domAnimation}>
            <section id="about" className="section">
                <HeadingDivider title="About me" />
                <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                    <div
                        tabIndex="0"
                        ref={ref}
                        className="text-xl font-light leading-relaxed"
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <p>
                            Hi, I{"'"}m Olayinka Jimba Jr., a Full-Stack Software Engineer with experience in Python, Javascript, Typescript, C#, C/C++, and Golang, among others. I am currently pursuing a B.A. in Computer Science at The College of Wooster.
                        </p>
                        <p className="my-3.5">
                            My professional programming journey officially started in 2022 when I worked as a Software Engineer Intern at Tabula Rasa HealthCare. I played a vital role in building NLP ML applications and developing dialysis knowledge graphs.
                        </p>
                        <p>
                            Later, I expanded my skills as a Full-Stack Software Engineer Intern in the same company, where I worked on a monolithic application and significantly reduced file loading times.
                        </p>
                        <p className="my-3.5">
                            Concurrently, I served as a Project Success Lead at Code for Philly, ensuring successful completion of existing projects and providing valuable insights to gain more engagement from marginalized communities in Philadelphia.
                        </p>
                        <p>
                            I also had an exciting stint as a QA Automation Engineer Intern at SHI International where I designed, developed, documented, and maintained test cases, enhancing the overall test coverage for internal applications.
                        </p>
                        <p className="my-3.5">
                            In my free time, I like to work on open source projects. I have created a couple of exciting projects, one of which is Phlask Data Handlers that simplifies queries for Firebase{"'"}s RTDB, and another is LCR Online, a full-stack web app that emulates the multiplayer board game {"\"LCR\""}.
                        </p>
                        <p>
                            Feel free to contact me if youre looking to collab and solve complex problems while contributing to meaningful projects :)
                        </p>
                    </div>
                </div>

                <TimeLine />
            </section>
        </LazyMotion>
    );
}
