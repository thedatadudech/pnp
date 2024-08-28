import CpuChipIcon from "@heroicons/react/24/outline/CpuChipIcon";
import dynamic from "next/dynamic";
import { type Techs } from "~/app_function/utils/interfaces";
import ViewMore from "../view_more";

const Layout = dynamic(() => import("./layout"));

export interface TechsProps {
  data: Techs[];
  total: number;
}

export default function RecentTechs(props: TechsProps) {
  return (
    <div className="mx-auto h-fit max-w-6xl px-4 sm:pl-4 sm:pr-0 lg:pt-3">
      <p className="flex items-center gap-2 text-2xl normal-case text-slate-400">
        <CpuChipIcon className="h-5 w-5" />
        Recent Techs
      </p>
      <div className="py-3">
        <Layout {...props} />
      </div>
      <div className="flex justify-center">
        <ViewMore url="/techs" counts={props.total} name="techs" />
      </div>
    </div>
  );
}
