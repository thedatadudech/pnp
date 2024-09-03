// import CpuChipIcon from "@heroicons/react/24/outline/CpuChipIcon";
// import dynamic from "next/dynamic";
// import { type <#TODO>Hit } from "~/app_function/types/HitTypes";

// const LayoutCard<#TODO>= dynamic(() => import("./layout_card"));

// export interface Search<#TODO>Props {
//   data: <#TODO>Hit[];
// }

// export default function Search<#TODO>(props: Search<#TODO>Props) {
//   if (props.data.length <= 0) return <></>;
//   return (
//     <div className="mx-4 h-fit max-w-6xl ">
//       <div className="flex justify-between">
//         <p className="flex items-center gap-2 text-2xl normal-case text-slate-400">
//           <CpuChipIcon className="h-5 w-5" />
//         </p>
//       </div>
//       <div className="mx-auto w-full justify-center gap-2 space-y-2 py-2 sm:grid sm:grid-cols-3 sm:space-y-0 md:mx-2 md:grid-cols-5 md:gap-4">
//         {props.data.map((x) => (
//           <LayoutCard<#TODO> {...x} key={x.objectID} />
//         ))}
//       </div>
//     </div>
//   );
// }
