// import { type <#TODO> } from "~/app_function/utils/interfaces";
// import PhotoIcon from "@heroicons/react/24/outline/PhotoIcon";
// import dynamic from "next/dynamic";
// import { type <#TODO>Hit } from "~/app_function/types/HitTypes";
// import { Highlight } from "../search/Highlight";

// const Link = dynamic(() => import("next/link"));
// const Image = dynamic(() => import("next/legacy/image"));

// export default function LayoutCard<#TODO>(props: <#TODO>) {
//   return (
//     <Link
//       className="p-card h-48 transform-gpu cursor-pointer flex-row items-center justify-start py-3 hover:-translate-y-1 hover:shadow-lg"
//       href={`/<#TODO>/view/${props.fileName}`}
//     >
//       <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-3xl px-0 text-justify">
//         {props.imgUrl ? (
//           <Image
//             blurDataURL={props.imgBlurData}
//             placeholder={props.imgBlurData ? "blur" : "empty"}
//             loading="lazy"
//             objectFit="cover"
//             layout="fill"
//             src={props.imgUrl}
//             alt={props.title}
//           />
//         ) : (
//           <div className="flex h-full flex-col justify-center text-center">
//             <PhotoIcon className="mx-auto h-10 w-10" />
//             <p>No logo</p>
//           </div>
//         )}
//       </div>
//       <div className="mx-0 mt-1 h-fit w-full px-2 text-center tracking-wider">
//         <p className="mb-1 font-semibold leading-4">
//           <Highlight hit={props as <#TODO>Hit} attribute="title" />
//         </p>
//         <p className="text-xs text-base-content">
//           <Highlight hit={props as <#TODO>Hit} attribute="category" />
//         </p>
//       </div>
//     </Link>
//   );
// }
