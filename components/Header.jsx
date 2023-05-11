import Link from "next/link";
import Image from "next/image";
import { Joan } from "next/font/google"

const joan = Joan({ weight: '400', subsets: ['latin'] })

export default function Header() {
  return (
    <div className="w-100 d-flex flex-column">
      <div className="w-100 bg-dark d-flex flex-row flex-wrap flex-start">
        <div className="">
          <Image src="/logo.svg" width="100" height="100" alt="logo"/>
        </div>
        <div className="d-flex align-items-center">
          <h1 className={`text-light ${joan.className}`}>PokeApp</h1>
        </div>
      </div>
      <nav className="w-100 navbar navbar-expand-md bg-light text-center">
        <ul className="navbar-nav me-auto  row w-100 align-content-center">
          <li className="col-4 nav-item">
            <Link className={`nav-link fs-4 ${joan.className}`} href="/">
              Home
            </Link>
          </li>
          <li className="col-4 nav-item">
            <Link className={`nav-link fs-4 ${joan.className}`} href="/List">
              List
            </Link>
          </li>
          <li className="col-4 nav-item">
            <Link className={`nav-link fs-4 ${joan.className}`} href="/About">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
