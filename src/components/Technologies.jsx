import { RiReactjsLine } from "react-icons/ri"
import { SiCplusplus } from "react-icons/si"
import { SiPython } from "react-icons/si"
import { SiTensorflow } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-7xl text-blue-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-yellow-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTensorflow className="text-7xl text-orange-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-600" />
            </div>

        </div>
    </div>
  )
}

export default Technologies