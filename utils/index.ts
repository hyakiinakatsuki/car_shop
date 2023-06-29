import { CarProps } from "@/types";

export async function fetchCars() {
	const headers = {
		"X-RapidAPI-Key": "dd715046d9msh04c5f290ab34237p1a0fb7jsne8c01978fe2c",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};

	const response = await fetch(
		"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
		{ headers: headers },
	);

	const result = await response.json();

	return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50;
	const mileageFactor = 0.1;
	const ageFactor = 0.05;
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {};
