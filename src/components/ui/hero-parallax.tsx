"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const HeroParallax = ({
    projects,
}: {
    projects: {
        title: string;
        link: string;
        thumbnail: StaticImageData;
    }[];
}) => {
    const firstRow = projects.slice(0, 2);
    const secondRow = projects.slice(2, 5);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [100, -100]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [-100, 100]),
        springConfig
    );

    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-auto lg:h-[260vh] lg:my-20 lg:pt-40 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="hidden lg:block"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
            <div className="lg:hidden flex flex-col items-center gap-5 justify-center px-3">
                {projects.map((product) => (
                    <div
                        key={product.title}
                        className="group/product flex flex-col items-center gap-2 justify-center"
                    >
                        <h2 className="text-white text-lg">
                            {product.title}
                        </h2>
                        <Link
                            href={product.link}
                            className="block group-hover/product:shadow-2xl rounded-xl overflow-hidden"
                        >
                            <Image
                                src={product.thumbnail}
                                className="object-fit h-full w-full inset-0"
                                alt={product.title}
                            />
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 text-center lg:text-start lg:px-4 w-full  left-0 top-0">
            <h1 className="text-3xl md:text-7xl font-bold text-white">
                I've made <br /> Some cool projects
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
                With React, Next.js, TailwindCSS and more. The backend ranges from Node, Express, MongoDB, Prisma and more.
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: StaticImageData;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-[360px] w-[640px] relative flex-shrink-0"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl"
            >
                <Image
                    src={product.thumbnail}
                    height="1920"
                    width="1080"
                    className="object-fit object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
