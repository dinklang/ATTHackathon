import Image from 'next/image'
export default function Analytics() {

	
    return (
        <div>
            <div className="ml-64 p-10  text-att-blue">

                <div className="">
                    <div className="flex align-middle">

                        <Image
                            src="/chart.jpg"
                            width={1024}
                            height={768}
                            priority
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}