const Intro = () => {
    return (
        <section id="intro">
            <div
            className="
                w-full
                h-screen
                bg-gradient-to-r
                from-blue-900
                via-purple-900
                to-black-900
                background-animate
                mx-auto my-auto
                flex
                flex-col items-center justify-center text-center
                ">
                <h1 className="title-font sm:text-4xl mb-9 font-medium text-white">
                    Hi, I'm Jakub Baran.
                    <br /> I'm a beginner programmer.
                </h1>
                <a
                href="#about"
                className="ml-4 inline-flex text-white border-2 py-4 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                View my portfolio
                </a>
            </div>
            
        </section>
    )
}

export default Intro