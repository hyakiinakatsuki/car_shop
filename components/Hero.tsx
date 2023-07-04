"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
	const handleScroll = () => {};

	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<h1 className="hero__title">让寻找，购买，租借车辆更快更简单！</h1>
				<p className="hero__subtitle">
					通过我们轻松的预订流程来简化您的租车体验。
				</p>
				<CustomButton
					title="查看所有车辆"
					containerStyles="bg-primary-blue text-white rounded-full mt-10"
					handleClick={handleScroll}
				/>
			</div>
			<div className="hero__image-container">
				<div className="hero__image">
					<Image src="/car.png" alt="tesla" fill className="object-contain" />
					<div className="hero__image-overlay" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
