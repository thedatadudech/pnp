interface RXTProps {
  techs: string[];
}

export default function RXT(props: RXTProps) {
  return (
    <div className="p-card h-fit w-full space-y-4 p-4 text-start md:max-w-xs lg:max-w-sm xl:max-w-sm">
      <p className="w-full text-start font-bold">Recent Expertise Technology</p>
      <p>{props.techs.join(", ")} ...</p>
    </div>
  );
}
