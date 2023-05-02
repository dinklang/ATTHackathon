import Image from 'next/image'
import React, { useEffect } from "react";
import Link from 'next/link'; // NextJS router
import Head from 'next/head';

export default function Art() {

	// Creates the array of pokemon []
	const [art, setArt] = React.useState([]);
	const [data, setData] = React.useState([]);

	// useEffect runs after the first render and every update
	useEffect(() => {
		async function getArt() {
			const response = await fetch(
				"https://api.artic.edu/api/v1/artworks"
			);
			setArt(await response.json());
			setData(art.data);
		}
		getArt();
	}, [data])  // [] empty brackets means it only runs once
			// because it's not keeping track of variables.

	if (!data) {
		return (<div>Loading...</div>)
	}

	return (
		<div>
			<div className="ml-64 p-10 grid grid-cols-3 gap-2.5 text-att-blue">
				{data.map((data) => (
					<div className="">
						<div className="text-att-black"><h3>{data.title}</h3></div>
						<div className="flex align-middle">
							<img className="h-48"
								src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}>
							</img>
						</div>
					</div>
				))
				}
			</div>
		</div>
	)
}