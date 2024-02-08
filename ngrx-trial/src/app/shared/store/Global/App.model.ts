import { BlogModel } from "../Blog/Blog.model";
import { CounterModel } from "../Counter/counter.model";

export interface AppStateModel {
    counter: CounterModel,
    blog: BlogModel[]
}