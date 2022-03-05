import { INode } from "@/interfaces/INode";
import { Node } from "@/factories/Node";
import utils from "@/utils";

export class NodesList {
  // to use in Vuex

  static adddNode__immutable(payload: {
    node: {
      label: string;
      parentId: string;
    };
    list: INode[];
  }): INode[] {
    const newList = [...payload.list];

    const node = new Node(payload.node.label, payload.node.parentId);

    newList.push(node);

    const parent = newList.find((node) => node.id === payload.node.parentId);

    parent?.addChild(node.id);

    return newList;
  }

  static removeNode__immutable(payload: {
    node: {
      id: string;
      parentId: string | null;
    };
    list: INode[];
  }): INode[] {
    let newList = [...payload.list];

    newList = utils.deleteNodeWithDescendants(payload.node.id, newList);

    newList
      .find((node) => node.id === payload.node.parentId)
      ?.removeChild(payload.node.id);

    return newList;
  }

  //mutabe
  static addNode__mutable(
    payload: { label: string; parentId: string | null },
    list: INode[]
  ): INode {
    const node = new Node(payload.label, payload.parentId);

    list.push(node);

    const parent = list.find((node) => node.id === payload.parentId);

    parent?.addChild(node.id);

    return node;
  }

  removeNode_mutable(
    payload: { id: string; parentId: string | null },
    list: INode[]
  ) {
    // 1.remove node with children

    list = utils.deleteNodeWithDescendants(payload.id, list);

    // 2. remove node from parent children list
    list.find((node) => node.id === payload.parentId)?.removeChild(payload.id);

    return list.find((node) => node.id === payload.id) || null;
  }
}
