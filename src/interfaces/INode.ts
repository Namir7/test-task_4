export interface INode {
  id: string;

  label: string;

  children: string[];

  parent: string | null;

  editLabel: (label: string) => void;

  addChild: (id: string) => void;

  removeChild: (id: string) => void;
}
