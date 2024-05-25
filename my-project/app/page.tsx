export default function Home() {
  return (
    <main className="">
      <div className="mainContent">
        <div className="squiggles flex">
          <figure className="sg mt-40 ml-40">
            <img src="/images/squig1.png" alt="" className="w-6" />
          </figure>
          <figure className="sg mt-56 ml-72">
            <img src="/images/squig2.png" alt="" className="w-6" />
          </figure>
          <figure className="sg right-48 top-56">
            <img src="/images/squig3.png" alt="" className="w-6" />
          </figure>
          <figure className="sg left-2/3 top-20">
            <img src="/images/squig4.png" alt="" className="w-6" />
          </figure>
          <figure className="sg right-80 top-56">
            <img src="/images/squig5.png" alt="" className="w-6" />
          </figure>
        </div>
        <h1 className="text-8xl font-yeseva text-center pt-28">Nice to meet you! <br />I'm Jasmine.</h1>
        <div className="flex items-center justify-center">
          <p className="text-center text-lg w-2/4 mt-14">I'm passionate about the web and all things design. My goal is to develop exceptional user experiences based on logic, creativity, and accessibility.</p>
        </div>
        <div className="container mx-auto px-44">
          <h2 className="text-3xl font-nototc text-center mt-14">My Skills</h2>
          {/*
          <div className="grid grid-cols-4 gap-6 flex-wrap items-start">
            <div className=""><img className="w-40" src="/images/html_logo.png" alt="" /></div>
            <div className=""><img className="w-28" src="/images/css_logo.png" alt="" /></div>
            <div className=""><img className="w-28" src="/images/js_logo.png" alt="" /></div>
            <div className=""><img className="w-28" src="/images/react_logo.png" alt="" /></div>
            <div className=""><img className="w-28" src="/images/tailwind_logo.png" alt="" /></div>
            <div className=""><img className="w-28" src="/images/nextjs_logo.png" alt="" /></div>
            <div className=""><img className="w-28" src="/images/git_logo.png" alt="" /></div>
            <div className=""><img className="w-28" src="/images/adobe_logo.png" alt="" /></div>
          </div>
        */}
        </div>
      </div>
    </main>
  );
}
