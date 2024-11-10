import Image from "next/image";
import Card from "./components/recent-post";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                HELLO,Im Reena khan I am fronted developer.{" "}
              </h1>
              <p className="csss">
                from sindh governor house karachi.study in sukkur sindh and
                resume metaverse ai intelegence program in governor sindh karaci
                pakistan.i hope we saterfied in globel in html and csss and
                typescript fundamental progam in giaic prom karachi.
              </p>
              <button className="resume-button">Download Resume</button>
            </div>
            <div>
              <img src="/pnj2.PNG" alt="image" width={400} height={300}
              className="image2" />
            </div>
          </div>
        </div>
      </div>

      
        <div className="recent-post">
          <div className="container">
            <div className="main"> 
              
            <div className="heading">
               <h3>Recent Post</h3>
               <button className="view-button">view all</button>
               </div>

               <div className="parent-card">

                 <Card/>
                 
                 
                <div className="card">
                  <h2 className="card-heading">
                   Making a degzine system from scratch
                  </h2>
                 <p className="date-text">
                  12 feb 2020| recently design pattern
                 </p>
                 <p className="paragraph">
                  simple way to design for alphabshino and portfolio site into
                  curreption fortfoili aming in the curruption.
                 </p>
                 </div>
                 
          </div>

            </div>
         
        </div>
       </div>

      <div />
      <div className="featured-section">
        <div className="container">
          <div className= "main">
          <div className="main-heading">
            <h3 className="font">Featured Works</h3>

           </div>
           <div className="card-parent">
           <div className="card">
            <Image src="/dashboard.PNG" alt="picture" width={246} height={180}></Image>
            <div className="">
              <h2 className="card-heading">Designing a dashboard</h2>

              <div className="badge-parent">
               <div className="badge">
                <p className="badge-text">2023</p>

               </div>
               <p>Dashboard</p>

              </div>
              <p className="paraghph2">
                 recently design pattern follow on move by design in figma project.
                 my skill is appproved by trying my self .
              </p>
            </div>
              
          </div>
          <div className="card">
            <Image src="/tree2.PNG" alt="picture" width={246} height={180}></Image>
            <div className="">
              <h2 className="card-heading">Designing a dashboard</h2>

              <div className="badge-parent">
               <div className="badge">
                <p className="badge-text">2023</p>

               </div>
               <p>Dashboard</p>

              </div>
              <p className="paraghph2">
                 recently design pattern follow on move by design in figma project.
                 my skill is appproved by trying my self .
              </p>
            </div>
              
          </div>
          <div className="card">
            <Image src="/batch2.PNG" alt="picture" width={246} height={180}></Image>
            <div className="">
              <h2 className="card-heading">Designing a dashboard</h2>

              <div className="badge-parent">
               <div className="badge">
                <p className="badge-text">2023</p>

               </div>
               <p>Dashboard</p>

              </div>
              <p className="paraghph2">
                 recently design pattern follow on move by design in figma project.
                 my skill is appproved by trying my self .
              </p>
            </div>
              
          </div>

           </div>
         


        </div>

          </div>

      </div>
    </>
  );
}
