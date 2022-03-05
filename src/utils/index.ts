import { INode } from "@/interfaces/INode";

const deleteNodeWithDescendants = (id: string, list: INode[]) => {
  let listCopy = [...list];

  const _deleteNode = (id: string): void => {
    const node = findNodeById(id, listCopy);

    listCopy = listCopy.filter((node) => node.id !== id);

    const parentNode = findNodeById(node.parent as string, listCopy);

    if (parentNode) {
      parentNode.removeChild(node.id);
    }

    node.children.forEach((childId) => {
      _deleteNode(childId);
    });
  };

  _deleteNode(id);

  return listCopy;
};

const findNodeById = (id: string, list: INode[]): INode => {
  return list.find((node) => node.id === id) as INode;
};

export default {
  deleteNodeWithDescendants,
  findNodeById,
};
