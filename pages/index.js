import Image from 'next/image'
import React, { useEffect } from "react";
import Link from 'next/link'; // NextJS router
import Head from 'next/head';
import SideBar from './components/SideBar';
import Pokemon from './pokemon/Pokemon';
import Art from './pokemon/Art';
import Dashboard from './components/Dashboard';


export default function Home() {

	return (
		<div>
			<Head><title>Pokemon Dashboard</title></Head>
			<div className="flex-auto">
				<SideBar></SideBar>
				<Dashboard></Dashboard>
			</div>
			
		</div>
	)
}
