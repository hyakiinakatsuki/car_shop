"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClassess }: { otherClassess: string }) => (
	<button type="submit" className="`-ml-3 z-10 ${otherClassess}`">
		<Image
			src="/magnifying-glass.svg"
			alt="玻璃"
			width={40}
			height={40}
			className="object-contain"
		/>
	</button>
);

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
	const [searchManufacturer, setSearchManufacturer] = useState("");
	const [searchModel, setSearchModel] = useState("");
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchManufacturer === "" && searchModel === "") {
			return alert("请输入搜索条件");
		}

		setModel(searchModel);
		setManufacturer(searchManufacturer);
	};

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					selected={searchManufacturer}
					setSelected={setSearchManufacturer}
				/>
				<SearchButton otherClassess="sm:hidden" />
			</div>
			<div className="searchbar__item">
				<Image
					src="/model-icon.png"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4"
					alt="模型"
				/>
				<input
					type="text"
					name="model"
					value={searchModel}
					onChange={(e) => setSearchModel(e.target.value)}
					placeholder="Tiguan"
					className="searchbar__input"
				/>
			</div>
			<SearchButton otherClassess="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
