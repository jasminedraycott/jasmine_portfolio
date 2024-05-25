export default function Page() {
  return (
    <main className="">
      <div className="mainContent">
        <figure className="sg left-1/2 top-32">
          <img src="/images/me_arrow.png" alt="" className="w-32" />
        </figure>
        <div className="container mx-auto px-56">
          <h1 className="text-5xl font-yeseva text-center pt-20">About</h1>
          <div className="flex justify-center items-center pt-10">
            <img className="w-72 rounded-full border-solid border-4 border-white" src="/images/jasmine.jpg" alt="Jasmine Draycott" />
          </div>
          <h2 className="text-3xl font-nototc text-center pt-12">Education</h2>
          <div className="flex items-center justify-center">
            <p className="text-center w-3/4 mt-5">I hold a Bachelor of Information Technology in Interactive Multimedia &amp; Design (Web and User Interfaces/Experience Stream) from Carleton University in Ottawa, Canada. This unique program allowed me to earn an Advanced Diploma of Applied Arts from Algonquin College alongside my degree.</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-center w-3/4 mt-5">My education provided me with a comprehensive foundation in programming, game development, animation, 3D&nbsp;modeling, and more. However, it was the subject web development that truly captured my passion.</p>
          </div>
        </div>
      </div>
    </main>
  );
}