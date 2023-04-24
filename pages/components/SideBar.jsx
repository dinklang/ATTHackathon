import Link from "next/link";

const SideBar = () => {
    return (

        <aside class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-att-dark">
                <a href="https://att.com/" class="flex items-start pl-2.5 mb-5">
                    <svg class="h-6 mr-3 sm:h-7" xmlns="http://www.w3.org/2000/svg" width="411.225" height="411.057" viewBox="-0.081 -42.213 411.225 411.057"><path fill="#00A8E0" d="M79.446 325.647c34.86 26.983 78.613 43.196 126.084 43.196 51.95 0 99.308-19.287 135.452-50.946.438-.388.222-.644-.21-.388-16.22 10.83-62.445 34.477-135.24 34.477-63.262 0-103.24-14.115-125.818-26.718-.432-.213-.592.11-.268.377m140.04 10.506c50.6 0 106.2-13.793 139.454-41.096 9.1-7.44 17.768-17.34 25.53-30.646 4.47-7.655 8.84-16.75 12.4-25.692.16-.436-.11-.648-.438-.158-30.924 45.508-120.473 73.894-212.937 73.894-65.357 0-135.68-20.9-163.212-60.808-.27-.37-.542-.21-.377.213 25.648 54.513 103.458 84.293 199.58 84.293m-55.282-90.436C58.97 245.717 9.35 196.705.35 163.257c-.112-.483-.43-.377-.43.058 0 11.26 1.126 25.79 3.065 35.436.925 4.696 4.746 12.064 10.348 17.937 25.482 26.562 89.012 63.78 199.036 63.78 149.902 0 184.177-49.935 191.176-66.356 5.005-11.742 7.598-32.965 7.598-50.793 0-4.314-.107-7.76-.27-11.143 0-.55-.32-.594-.43-.06-7.49 40.18-135.565 93.603-246.24 93.603M19.74 75.143C13.71 87.11 7.028 107.3 5.04 117.748c-.87 4.477-.5 6.627 1.07 9.968 12.613 26.76 76.412 69.58 225.23 69.58 90.79 0 161.318-22.306 172.744-63.01 2.104-7.492 2.217-15.403-.486-26.063-3.02-11.912-8.676-25.803-13.463-35.557-.158-.318-.437-.27-.38.105 1.778 53.387-147.1 87.794-222.216 87.794-81.366 0-149.247-32.418-149.247-73.352 0-3.933.814-7.867 1.83-11.96.102-.375-.218-.437-.382-.11M341.316 9.597c.864 1.354 1.295 2.8 1.295 4.744 0 22.836-69.89 63.234-181.148 63.234-81.748 0-97.053-30.326-97.053-49.612 0-6.894 2.643-13.948 8.466-21.112.318-.426.048-.59-.32-.273a205.975 205.975 0 0 0-28.937 30.06c-4.09 5.17-6.63 9.75-6.63 12.493 0 39.967 100.216 68.945 193.92 68.945 99.845 0 144.405-32.594 144.405-61.238 0-10.237-3.985-16.213-14.18-27.8-6.616-7.536-12.875-13.673-19.5-19.714-.32-.264-.543-.05-.32.273m-30.61-22.83c-30.813-18.47-66.596-28.98-105.173-28.98-38.846 0-75.707 10.876-106.632 29.835C89.624-6.67 84.403-2.094 84.403 3.787c0 17.336 40.515 35.976 112.394 35.976 71.133 0 126.305-20.417 126.305-40.07 0-4.69-4.1-7.973-12.396-12.927"/></svg>
                    <span class="self-start text-xl font-semibold whitespace-nowrap dark:text-white">AT&T</span>
                </a>
                <ul class="space-y-2 font-medium">
                    <li>
                        <Link href="/components/Dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-att-grey">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span class="ml-3">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                    <Link href="/pokemon/Pokemon" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-att-grey">
                            
                            <svg class="flex-shrink-0 w-6 h-6 bg-att" width="800px" height="800px" viewBox="0 0 48 48" fill="#959595" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#959595" stroke-width="4" stroke-linejoin="round" />
                                <circle cx="24" cy="24" r="6" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round" />
                                <path d="M30 24H44" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 24H18" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <circle cx="24" cy="24" r="2" fill="white" />
                            </svg>


                            <span class="flex-1 ml-3 whitespace-nowrap">Pokemon</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pokemon/Art" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-att-grey">
                            <svg class="flex-shrink-0 w-6 h-6 bg-att" width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#959595">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20" /> <g> <path d="M8.55 3.06c1.01.34-1.95 2.01-.1 3.13 1.04.63 3.31-2.22 4.45-2.86.97-.54 2.67-.65 3.53 1.23 1.09 2.38.14 8.57-3.79 11.06-3.97 2.5-8.97 1.23-10.7-2.66-2.01-4.53 3.12-11.09 6.61-9.9zm1.21 6.45c.73 1.64 4.7-.5 3.79-2.8-.59-1.49-4.48 1.25-3.79 2.8z" /> </g> </g>

                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Art</span>
                        </Link>

                    </li>
                </ul>
            </div>
            
        </aside>
    )
}

export default SideBar;