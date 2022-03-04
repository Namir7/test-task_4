// import { NodeType } from "@/types/NodeType";

export interface INode {
  id: string;

  value: string;

  // meta: {
  //   type: NodeType;
  // };

  children: INode[];

  // editValue: () => void;

  // addChild: (node: Node) => void;

  // deleteChild: () => void;
}
