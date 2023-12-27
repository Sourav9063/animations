import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <div>
          <Link href={"/"}>Home</Link>
        </div>
        <div>
          <h3>Simple</h3>
          <ul>
            <li>
              <Link href={"/simple/transition"}>Transition</Link>
            </li>
            <li>
              <Link href={"/simple/keyframe"}>Keyframe</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Complex</h3>
          <ul>
            <li>
              <Link href={"/complex"}>Stars</Link>
            </li>
            <li>
              <Link href={"/complex"}>SVG Animation</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
