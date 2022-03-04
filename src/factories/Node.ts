import { v4 as uuidv4 } from "uuid";

import { INode } from "@/interfaces/INode";

export class Node implements INode {
  public id: string;

  constructor(public value: string, public children: INode[]) {
    this.id = uuidv4();
  }
}
