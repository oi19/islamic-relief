import {Doctor} from "./doctor";

export type specialType = {
  name: string;
  photo?: string;
  id?: string;
  doctors?: Doctor[];
};
