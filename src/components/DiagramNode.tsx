import { DiagramNodeT } from "../../types/types";

type DiagramNodeProps = {
  node: DiagramNodeT;
};

type NodeConnectionStyle = {
  top: Record<string, any>;
  bottom: Record<string, any>;
  left: Record<string, any>;
  right: Record<string, any>;
};

const nodeConnectionStyle: NodeConnectionStyle = {
  top: {
    top: "-2rem",
    left: "50%",
    translate: "-50%",
    rotate: "180deg",
  },
  right: {
    top: "50%",
    translate: "0 -50%",
    rotate: "270deg",
    right: "-1rem",
  },
  left: {
    top: "50%",
    translate: "0 -50%",
    rotate: "90deg",
    left: "-1rem",
  },
  bottom: {
    left: "50%",
    translate: "-50%",
  },
};

const DiagramNode = ({ node }: DiagramNodeProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${(node.row - 1) * 6}rem`,
        left: `${(node.column - 1) * 12}rem`,
      }}
    >
      <div
        style={{
          backgroundColor: node.bgColor,
          color: node.textColor,
        }}
        className="flex font-bold items-center justify-center outline rounded-2xl p-2 w-40 h-16"
      >
        {node.title}
      </div>
      <div
        style={{
          position: "absolute",
          ...(node.arrowDirection
            ? nodeConnectionStyle[node.arrowDirection]
            : { visibility: "hidden" }),
        }}
      >
        <div className="relative -bottom-[2px] w-[2px] h-8 bg-black"></div>
        <div className="absolute bottom-[5px] -translate-y-1/2 rotate-45 right-0 w-2 h-[2px] bg-black"></div>
        <div className="absolute bottom-[5px] -translate-y-1/2 -rotate-45 left-0 w-2 h-[2px] bg-black"></div>
      </div>
    </div>
  );
};

export default DiagramNode;
