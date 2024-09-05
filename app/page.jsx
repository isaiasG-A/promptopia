
function Home() {
  return (
    //Tailwind: "w-full": Tailwind allows us to quickly add styles by simply adding utility classes. 
    //br tag will hide the content on large devices but will break the content on smaller devices
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an ope-source AI prompting tool for modern world to discover, crate and share creative prompts.
      </p>
    </section>
  )
}

export default Home