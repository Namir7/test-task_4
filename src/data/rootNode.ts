import { Node } from "@/factories/Node";

export default new Node("root", [
  new Node("value 1", []),
  new Node("value 2", [new Node("value 3", []), new Node("value 4", [])]),
]);
