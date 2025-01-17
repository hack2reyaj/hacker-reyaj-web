import { DiAndroid, DiCss3, DiGithubFull, DiJavascript, DiKomodo, DiNetmagazine, DiPython, DiReact } from "react-icons/di";


const Tech = () => {
  return (
    <div className="my-9 space-y-7">
      <h1 className="text-center font-semibold text-3xl">Technologies I Use</h1>

      <div className="my-9 grid grid-cols-auto-fit place-content-center gap-y-4">

        <DiAndroid size={150} />
        <DiPython size={150} />
        <DiReact size={160} />
        <DiJavascript className="animate-bounce" size={160} />
        <DiCss3 className="hover:scale-125 transition-all duration-300 hover:text-pink-600 cursor-pointer ease-out " size={160} />

        <DiGithubFull size={150} />
        <DiNetmagazine size={150} />
        <DiKomodo size={150} />






      </div>
    </div >
  )
}

export default Tech