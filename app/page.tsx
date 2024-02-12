'use client'

import {HeroParallax} from "@/components/ui/hero";
import {motion} from "framer-motion";
import {ImagesSlider} from "@/components/ui/page-hero";
import React from "react";


export default function Home() {
    const heroItems = [
        {
            "title": "Autodesk",
            "description": "Autodesk is a global leader in design and make technology, with expertise across architecture, engineering, construction, design, manufacturing, etc.",
            "link": "https://www.autodesk.com/",
            "thumbnail": "/logos/autodesk.png"
        },
        {
            "title": "Limelight",
            "description": "Limelight was designed to make robotic perception as easy and reliable as possible without sacrificing raw performance. Limelight is easy enough for complete beginners, and powerful enough for professionals. ",
            "link": "https://limelightvision.io/",
            "thumbnail": "/logos/limelight.png"
        },
        {
            "title": "FRC",
            "description": "Teams of students are challenged to raise funds, design a team \"brand,\" hone teamwork skills, and build and program industrial-size robots to play a difficult field game against like-minded competitors. It’s as close to real-world engineering as a student can get. Volunteer professional mentors lend their time and talents to guide each team. Each season ends with an exciting FIRST Championship.",
            "link": "https://www.firstinspires.org/robotics/frc",
            "thumbnail": "/logos/frc.png"
        },
        {
            "title": "Techknigts",
            "description": "The 334th Team in FIRST Robotics Competition",
            "link": "/",
            "thumbnail": "/logo.png"
        },
        {
            "title": "Elastic Dashboard",
            "description": "A simple and modern dashboard for FRC.",
            "link": "https://github.com/Gold872/elastic-dashboard",
            "thumbnail": "/logos/elastic.png"
        },
        {
            "title": "Elastic Dashboard",
            "description": "A simple and modern dashboard for FRC.",
            "link": "https://github.com/Gold872/elastic-dashboard",
            "thumbnail": "/logos/elastic.png"
        },
        {
            "title": "Java",
            "description": "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
            "link": "https://www.java.com/en/",
            "thumbnail": "/logos/java.png"
        },
        {
            "title": "CTR Electronics",
            "description": "CTR Electronics provides robust embedded solutions for various control and robotic applications.",
            "link": "https://store.ctr-electronics.com/",
            "thumbnail": "/logos/ctr.png"
        },
        {
            "title": "Wpilib",
            "description": "The WPILib Mission is to enable FIRST Robotics teams to focus on writing game-specific software rather than focusing on hardware details - \"raise the floor, don't lower the ceiling\". We work to enable teams with limited programming knowledge and/or mentor experience to be as successful as possible, while not hampering the abilities of teams with more advanced programming capabilities.",
            "link": "https://docs.wpilib.org/en/stable/index.html",
            "thumbnail": "/logos/wpilib.png"
        },
        {
            "title": "Andymark",
            "description": "AndyMark develops, manufactures, and distributes mechanical and electrical parts for the mobile and competitive robotics market, with a focus on robotics education. The AndyMark staff strives to support the FIRST Community by developing and distributing important components to robot builders within the education, competition, and mobile robotics markets.",
            "link": "https://www.autodesk.com/",
            "thumbnail": "/logos/Andymark.png"
        },
        {
            "title": "Andymark",
            "description": "AndyMark develops, manufactures, and distributes mechanical and electrical parts for the mobile and competitive robotics market, with a focus on robotics education. The AndyMark staff strives to support the FIRST Community by developing and distributing important components to robot builders within the education, competition, and mobile robotics markets.",
            "link": "https://www.autodesk.com/",
            "thumbnail": "/logos/Andymark.png"
        },
    ]

    const sponsers = [
        "/sponsors/",
        "/sponsors/",
        "/sponsors/"
    ];

    return (
        <section className={"overflow-auto"}>
            <HeroParallax products={heroItems}/>
            <div className={""}> {/* Sponsors */}
                <h1>Sponsors</h1>
                <p>
                    ...
                </p>
                <ImagesSlider className="object-cover" images={sponsers}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -80,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="z-50 flex flex-col justify-center items-center"
                    >
                        <motion.p
                            className="font-bold text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 main">
                            The Team Now
                        </motion.p>
                    </motion.div>
                </ImagesSlider>
            </div>
            <div className={""}> {/* Latest News/Recaps*/}

            </div>
        </section>
    )
}
