import Image from 'next/image';
import logo from '../../public/logo/logo48x48.png';
import Link from "next/link";
import {BiPhone} from "react-icons/all";
export default function Footer() {
    return (
        <footer className="md:px-24 px-4 bg-[#F9FAFB] py-10 divide-y grid grid-cols-1 md:grid-cols-1 justify-between gap-3">
            <div className="flex justify-between sm:flex-nowrap flex-wrap pb-8 gap-3">
                <Image src={logo} alt="logo" />
                <h1 className="font-semibold ">
                    Desa Cibeusi
                </h1>
            </div>
            <div className="flex justify-between pt-8 sm:flex-nowrap flex-wrap gap-3">
                <p>&copy;2022 Desa Cibeusi Subang</p>
                <ul className="flex gap-x-6">
                    <li>
                        <Link href={"#"}>Beranda</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Wisata</Link>
                    </li>
                    {/* <li>Services</li> */}
                    <li>
                        <Link href={"#"}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            Artikel
                        </Link>
                    </li>
                </ul>
                <p className="flex gap-x-2">
                    <BiPhone
                        style={{
                            width: "inherit",
                            height: "inherit",
                            display: "inherit",
                        }}
                    />
                    <span>0800-10056-5730</span>
                </p>
            </div>
        </footer>
    )

}