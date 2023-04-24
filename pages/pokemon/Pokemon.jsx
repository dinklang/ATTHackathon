import Image from 'next/image'
import React, { useEffect } from "react";
import Link from 'next/link'; // NextJS router
import Head from 'next/head';
import SideBar from '../components/SideBar';

export default function Pokemon() {

	// Creates the array of pokemon []
	const [pokemon, setPokemon] = React.useState([]);

	// useEffect runs after the first render and every update
	useEffect(() => {
		async function getPokemon() {
			const response = await fetch(
				// https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json
				"https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
			);
			setPokemon(await response.json());
		}
		getPokemon();
	}, [])  // [] empty brackets means it only runs once
			// because it's not keeping track of variables.

	return (
		<div>
			<SideBar></SideBar>
			<div className="ml-64 p-10 grid grid-cols-4 gap-2.5">
				{pokemon.map((pokemon) => (
					<div className="">
						<Link href={`/pokemon/${pokemon.id}`}>
							<img className="h-48"
								src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}>
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