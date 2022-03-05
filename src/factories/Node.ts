import { v4 as uuidv4 } from "uuid";

import { INode } from "@/interfaces/INode";

export class Node implements INode {
  public id: string;
  public children: string[];

  constructor(public label: string, public parent: string | null = null) {
    this.id = uuidv4();
    this.children = [];
  }

  editLabel(label: string) {
    this.label = label;
  }

  addChild(id: string) {
    this.children.push(id);
  }

  removeChild(id: string) {
    this.children.filter((child) => child !== id);
  }
}
