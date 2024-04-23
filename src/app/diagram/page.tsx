import DiagramNode from "@/components/DiagramNode";
import { diagramNodes } from "@/utility/diagramNodes";

const DiagramPage = () => {
  return (
    <div className="flex gap-8 flex-col w-full justify-center">
      <h1 className="text-center text-3xl font-bold">Diagram</h1>
      <div className="flex w-full justify-between">
        <div className="relative">
          {diagramNodes.map((node, index) => (
            <DiagramNode key={index} node={node} />
          ))}
        </div>
        <div className="w-96 h-96 border"></div>
      </div>
    </div>
  );
};

export default DiagramPage;
