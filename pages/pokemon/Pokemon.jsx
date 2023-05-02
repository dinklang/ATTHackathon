import Image from 'next/image'
import React, { useEffect } from "react";
import Link from 'next/link'; // NextJS router

export default function Pokemon() {

	// Creates the array of pokemon []
	const [pokemon, setPokemon] = React.useState([]);



	async function getPokemon(speed) {
		const response = await fetch(`http://localhost:5000/pokemon?speed=${speed}`);
		setPokemon(await response.json());
	}

	async function setUpLoad(speed) {
		setPokemon([]);
		await getPokemon(speed);
	}

	return (
		<div>
			<div className="ml-64 text-att-black font-sans">
				<div className="p-10 text-center">
					<div className="text-center py-8 font-bold text-2xl">Test Internet Speeds</div>
					<div className="inline-flex">
						<div className="flex-auto px-10">
							<button
								className="bg-att-dark hover:bg-att-blue text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
								onClick={() => setUpLoad(1)}>
								Current
							</button>
						</div>
						<div className="flex-auto px-10">
							<button
								className="bg-att-dark hover:bg-att-blue text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
								onClick={() => setUpLoad(150)}>
								Load in 4G
							</button>
						</div>
						<div className="flex-auto px-10">
							<button className="bg-att-dark hover:bg-att-blue text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
								onClick={() => setUpLoad(300)}>
								Load in Fast 3G
							</button>
						</div>
						<div className="flex-auto px-10">
							<button className="bg-att-dark hover:bg-att-blue text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
								onClick={() => setUpLoad(600)}>
								Load in Slow 3G
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="ml-64 p-10 grid grid-cols-4 gap-2.5">
				{pokemon.map((pokemon) => (
					<div className="" key={pokemon.id}>
						<Link href={`/pokemon/${pokemon.id}`}>
							<img className="h-48"
								src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
								>
							</img>
							<div className="text-att-black"><h3>{pokemon.name}</h3></div>
						</Link>
					</div>
				))
				}
			</div>
		</div>
	)
}