import { INode } from "@/interfaces/INode";

const deleteNodeWithDescendants = (id: string, list: INode[]) => {
  let listCopy = [...list];

  const _deleteNode = (id: string): void => {
    // console.log("id: ");
    // console.log(id);

    const node = _findNodeById(id);

    // const nodeIndex = listCopy.findIndex((node) => node.id === id);

    listCopy = listCopy.filter((node) => node.id !== id);
    // listCopy.splice(nodeIndex, 1);

    node.children.forEach((childId) => {
      _deleteNode(childId);
    });
  };

  const _findNodeById = (id: string): INode => {
    return listCopy.find((node) => node.id === id) as INode;
  };

  // console.log("list before: ");
  // console.log(listCopy);

  _deleteNode(id);

  // console.log("list after: ");
  // console.log(listCopy);

  return listCopy;
};

export default {
  deleteNodeWithDescendants,
};
