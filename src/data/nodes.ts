import { NodesList } from "@/factories/NodesList";
import { INode } from "@/interfaces/INode";

const nodesList = [] as INode[];

const rootNode = NodesList.addNode__mutable(
  { label: "root", parentId: null },
  nodesList
);
NodesList.addNode__mutable(
  { label: "value 1", parentId: rootNode.id },
  nodesList
);
const node2 = NodesList.addNode__mutable(
  { label: "value 2", parentId: rootNode.id },
  nodesList
);
NodesList.addNode__mutable(
  { label: "value 3 ", parentId: node2.id },
  nodesList
);
NodesList.addNode__mutable({ label: "value 4", parentId: node2.id }, nodesList);

export default nodesList;
