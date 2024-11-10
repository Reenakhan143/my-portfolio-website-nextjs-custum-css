 import Link from "next/link";


export default function Header(data:any) {
    return (
     <>
     <div className={`${data.font.className}links-parent`}>
        <ul className="link">
            <li className="link"><Link href={"/Home"}>Home</Link></li>
            <li className="link"><Link href={"/contact"}>Contact</Link></li>
            <li className="link"><Link href={"/Skill"}>Skill</Link></li>
        </ul>
     </div>
     </>
        
    );
  }
  