import { Inter } from 'next/font/google'
import { useRouter } from "next/router"
import React, { useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';

export default function Details() {
    const  {
        query: {id},
    } = useRouter();

    // same as:
    // const router = useRouter();
    // console.log(router.asPath);

    const [pokemon, setPokemon] = React.useState(null);

    useEffect(() => {
		async function getPokemon() {
			const response = await fetch(
				// https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json
				`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
			);
			setPokemon(await response.json());
		}
        // If you have an ID setPokemon or it'll get EMPTY get
        if (id) {
		    getPokemon();
        }
	}, [id]); // this time you gotta keep track or id or it will never load
             // after initial render

    // we get an error when trying to display image of null source
    if (!pokemon) {
        return (<div>Loading...</div>)
    }

    // src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}>
    
    return (
        <div>
            <Head>
                <title>Yuh</title>
            </Head>
            <Link href="/">
                Back to home
            </Link>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <img
                        src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                        >
                    </img>
                </div>
                <div>
                    <div className="font-bold text-3xl my-1">
                        {`${pokemon.name}`}
                    </div>
                    <div className="italic my-1">
                        {`${pokemon.type.join(", ")}`}
                    </div>
                    <table>
                        <thead className="bold">
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.stats.map(({name, value}) =>
                            (
                                <tr key={name}>
                                    <td className="font-bold">{name}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}