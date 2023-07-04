"use client";
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	const [allCars, setAllCars] = useState([]);
	const [loading, setLoading] = useState(false);

	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");

	const [fuel, setFuel] = useState<string | number>("");
	const [year, setYear] = useState<string | number>(2022);

	const [limit, setLimit] = useState(10);

	const getCars = async () => {
		setLoading(true);
		try {
			const result = await fetchCars({
				manufacturer: manufacturer || "",
				model: model || "",
				limit: limit || 10,
				year: typeof year === "number" ? year : 2023,
				fuel: typeof fuel === "string" ? fuel : "",
			});
			setAllCars(result);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getCars();
	}, [fuel, year, manufacturer, model, limit]);

	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">车辆分类</h1>
					<p>发现你所喜欢的</p>
				</div>
				<div className="home__filters">
					<SearchBar setManufacturer={setManufacturer} setModel={setModel} />
					<div className="home__filter-container">
						<CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
						<CustomFilter
							title="year"
							options={yearsOfProduction}
							setFilter={setYear}
						/>
					</div>
				</div>
				{allCars.length > 0 ? (
					<section>
						<div className="home__cars-wrapper">
							{allCars.map((car) => (
								<CarCard car={car} />
							))}
						</div>
						{loading && (
							<div className="mt-16 w-full flex-center">
								<Image
									src="/loader.png"
									alt="loader"
									width={50}
									height={50}
									className="object-contain"
								/>
							</div>
						)}
						<ShowMore
							pageNumber={limit / 10}
							isNext={limit > allCars.length}
							setLimit={setLimit}
						/>
					</section>
				) : (
					<div className="home__error-container">
						<h2 className="text-black text-xl font-bold">没有结果</h2>
					</div>
				)}
			</div>
		</main>
	);
}
