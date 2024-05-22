import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png"
function About() {
  return (
    <div className="bg-slate-900">
        <section className="bg-white dark:bg-gray-900 h-screen">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to DevArcade</h2>
                    <p className="mb-4">Welcome to DevArcade, your go-to destination for a thrilling gaming experience with a twist – all our games are centered around web development!</p>
                    <p>At DevArcade, we were passionate about combining the excitement of gaming with the practicality of learning web development skills. Our platform offers a curated selection of interactive games that challenge players to think critically, problem-solve creatively, and, most importantly, have a blast while doing it.</p>
                    <p>So what are you waiting for? Dive into DevArcade today and let the games begin!</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src={about1} alt="DevArcade" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={about2} alt="DevAracde2" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default About