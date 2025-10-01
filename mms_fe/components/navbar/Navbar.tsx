import Link from "next/link"
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });

const Navbar = () => {
    return (
        <nav className="py-6 px-4 border-b border-b-gray-300">
            <section className="container mx-auto flex gap-2 justify-between items-center">
                <Link
                    href='/'
                    className={`text-xl md:text-2xl text-gray-800 font-semibold ${manrope.className}`}
                >
                    Merchants Management System
                </Link>
                <Link href={'/form'}>
                    <button className="text-xs font-semibold transition cursor-pointer duration-150 rounded-4xl text-white uppercase tracking-wide bg-primary px-8 py-3 hover:bg-secondary">
                        Add Merchant
                    </button>
                </Link>
            </section>
        </nav>
    )
}

export default Navbar