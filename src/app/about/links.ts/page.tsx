import { MoveUpRight } from "lucide-react";
import { AiFillDiscord } from "react-icons/ai";
import { SiDiscord, SiGithub, SiHashnode, SiInstagram, SiTwitter } from "react-icons/si";

export default function Page() {
  return (
    <>
      <div className="text-sm">
        <div className="ml-4 mt-4 flex gap-x-5">
          <div className="text-muted-foreground">1</div>
          <div className="flex gap-x-3">
            <span className="text-red-400">const</span>{" "}
            <span className="text-blue-300 flex gap-x-2 items-center">Discord <SiDiscord/></span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300">
              <a
                href="https://discordapp.com/users/1138475889139662888/"
                className="flex gap-x-2 items-center"
              >
                avaterclasher._07160 <MoveUpRight className="text-white h-4 w-4"/>
              </a>
            </span>
          </div>
        </div>
        <div className="ml-4 mt-2 flex gap-x-5">
          <div className="text-muted-foreground">2</div>
          <div className="flex gap-x-3">
            <span className="text-red-400">const</span>{" "}
            <span className="text-blue-300 flex gap-x-2 items-center">Github <SiGithub/></span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300">
              <a
                href="https://github.com/AvaterClasher"
                className="flex gap-x-2 items-center "
              >
                @AvaterClasher <MoveUpRight className="text-white h-4 w-4"/>
              </a>
            </span>
          </div>
        </div>
        <div className="ml-4 mt-2 flex gap-x-5">
          <div className="text-muted-foreground">3</div>
          <div className="flex gap-x-3">
            <span className="text-red-400">const</span>{" "}
            <span className="text-blue-300 flex gap-x-2 items-center">Instagram <SiInstagram/></span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300">
              <a
                href="https://www.instagram.com/soumyadip_moni"
                className="flex gap-x-2 items-center "
              >
                @soumyadip_moni <MoveUpRight className="text-white h-4 w-4"/>
              </a>
            </span>
          </div>
        </div>
        <div className="ml-4 mt-2 flex gap-x-5">
          <div className="text-muted-foreground">4</div>
          <div className="flex gap-x-3">
            <span className="text-red-400">const</span>{" "}
            <span className="text-blue-300 flex gap-x-2 items-center">Twitter <SiTwitter/></span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300">
              <a
                href="https://x.com/Avater004"
                className="flex gap-x-2 items-center "
              >
                @Avater004 <MoveUpRight className="text-white h-4 w-4"/>
              </a>
            </span>
          </div>
        </div>
        <div className="ml-4 mt-2 flex gap-x-5">
          <div className="text-muted-foreground">5</div>
          <div className="flex gap-x-3">
            <span className="text-red-400">const</span>{" "}
            <span className="text-blue-300 flex gap-x-2 items-center">Hashnode <SiHashnode/></span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300">
              <a
                href="https://hashnode.com/@Avater"
                className="flex gap-x-2 items-center"
              >
                @Avater <MoveUpRight className="text-white h-4 w-4"/>
              </a>
            </span>
          </div>
        </div>
        <div className="ml-4 mt-1 flex gap-x-5">
          <div className="text-muted-foreground/30">6</div>
        </div>
      </div>
    </>
  );
}
