import Image from "next/image";
import { GlareCard } from "./ui/GlareCard";
import image from "../public/Planning_Stratergy.png";
import designAndCode from "../public/designAndCode.png";
import deployAndMaintain from "../public/deployAndMaintain.png";

export default function Approach() {
  return (
    <section className="w-full py-8">
      <h1 className="heading">
        My <span className="text-purple">Approach</span>
      </h1>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <GlareCard className="relative flex flex-col items-start justify-end p-6 overflow-hidden group">
            {/* Background Image */}
            <Image
              src={image}
              alt="Background"
              fill
              className="absolute inset-0 object-cover opacity-30"
            />

            {/* Semi-transparent Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Text Content */}
            <div className="relative z-10">
              <p className="font-bold text-white text-lg">
                Problem Planning and Strategy
              </p>
              <p className="font-normal text-base text-neutral-200 mt-4">
                I will work closely with you to define the website&apos;s
                objectives, target audience, and key features. This phase will
                involve determining the site structure, navigation, and content
                requirements.
              </p>
            </div>
          </GlareCard>
          <GlareCard className="relative flex flex-col items-start justify-end p-6 overflow-hidden group">
            {/* Background Image */}
            <Image
              src={designAndCode}
              alt="Background"
              fill
              className="absolute inset-0 object-cover opacity-40"
            />

            {/* Semi-transparent Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Text Content */}
            <div className="relative z-10">
              <p className="font-bold text-white text-lg">Design and Code</p>
              <p className="font-normal text-base text-neutral-200 mt-4">
                Once the strategy is finalized, I will proceed with the design
                and development of the website, translating your vision into
                functional code. Throughout this phase, I will keep you informed
                of my progress.
              </p>
            </div>
          </GlareCard>
          <GlareCard className="relative flex flex-col items-start justify-end p-6 overflow-hidden group">
            {/* Background Image */}
            <Image
              src={deployAndMaintain}
              alt="Background"
              fill
              className="absolute inset-0 object-cover opacity-20"
            />

            {/* Semi-transparent Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Text Content */}
            <div className="relative z-10">
              <p className="font-bold text-white text-lg">
                Deploy and Maintain
              </p>
              <p className="font-normal text-base text-neutral-200 mt-4">
                After completing the development, I will deploy the website and
                ensure its optimal performance. Additionally, I will offer
                ongoing maintenance and support as necessary.
              </p>
            </div>
          </GlareCard>
        </div>
      </div>
    </section>
  );
}
