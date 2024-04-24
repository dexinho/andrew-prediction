import DiagramNode from "@/components/DiagramNode";
import LegendMarker from "@/components/LegendMarker";
import { diagramNodes } from "@/utility/diagramNodes";
import { legendData } from "@/utility/legendData";

const DiagramPage = () => {
  return (
    <div className="flex gap-8 flex-col w-full justify-center">
      <h1 className="text-center text-3xl font-bold">Diagram</h1>
      <div className="flex w-full justify-around">
        <div className="relative">
          {diagramNodes.map((node, index) => (
            <DiagramNode key={index} node={node} />
          ))}
        </div>
        <div className="w-96 rounded-2xl flex-col gap-1">
          {legendData.map((box, index) => (
            <LegendMarker
              key={index}
              bgColor={box.bgColor}
              title={box.title}
              description={box.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagramPage;
