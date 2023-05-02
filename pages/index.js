import Image from 'next/image'
import React, { useEffect } from "react";
import Link from 'next/link'; // NextJS router
import Pokemon from './pokemon/Pokemon';
import Art from './pokemon/Art';
import Dashboard from '@/components/Dashboard';


export default function Home() {

	return (
		<div>
			<div className="flex-auto">
			<div className="block ml-64 p-10 h-max text-att-black">
            <div className="align-middle">Welcome to the AT&T API testing dashboard.</div>
            <div className="align-middle">To begin, please click one of the buttons in the dashboard to test 5G and Fiber speed using your API of choice </div>
        </div>
			</div>
			
		</div>
	)
}
