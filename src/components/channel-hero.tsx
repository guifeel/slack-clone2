import { format } from "date-fns";

interface ChannelHeroProps {
  name: string;
  creationTime: number;
}

export const ChannelHero = ({ name, creationTime }: ChannelHeroProps) => {
  return (
    <div className="mt-[88px] mx-5 mb-4">
      <p className="text-2xl font-bold flex items-center mb-2"># {name}</p>
      <p className="font-normal text-slate-800 mb-4">
        这个频道创建于 {format(creationTime, "MMMM do, yyyy")}. 这里是频道{" "}
        <strong>{name}</strong> 的开始.
      </p>
    </div>
  );
};
