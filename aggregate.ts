import { Iterator } from "./iterator";

export interface Aggregate {
  NodeIterator(): Iterator;
}
