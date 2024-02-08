import { createReducer, on } from "@ngrx/store";
import { blogState } from "./Blog.state";
import { loadBlog } from "./Blog.actions";

const _blogReducer = createReducer(blogState,
    on(loadBlog, (state) => {
        return {
            ...state,
        }
    })
)
export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action)
}