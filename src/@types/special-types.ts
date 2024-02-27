import {Doctor} from "./doctor";

export type specialType = {
  name: string;
  image?: string;
  id: number;
  doctors?: Doctor[];
};
