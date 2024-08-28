import dynamic from "next/dynamic";
import { type MeProps } from "./me";

export interface MeSectionProps {
  me: MeProps;
}

const Me = dynamic(() => import("./me"));

export default function MeSection(props: MeSectionProps) {
  return (
    <div className="mx-4 mt-3 flex flex-col items-center justify-start gap-4 xl:mt-12">
      <Me {...props.me} />
    </div>
  );
}
