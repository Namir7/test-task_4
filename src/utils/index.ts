import { INode } from "@/interfaces/INode";

const getListWithoutNode = (nodeId: string, list: INode[]): INode[] => {
  const listCopy = [...list];

  _removeNodeFromList(nodeId, listCopy);

  return listCopy;
};

const _removeNodeFromList = (nodeId: string, list: INode[]): void => {
  const nodeToRemove = list.find((node) => node.id === nodeId);

  list.filter((node) => node.id !== nodeToRemove?.id);

  nodeToRemove?.children.forEach((id) => _removeNodeFromList(id, list));
};

export default {
  getListWithoutNode,
};
