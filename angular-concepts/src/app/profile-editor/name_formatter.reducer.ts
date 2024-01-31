import { createReducer, on } from "@ngrx/store";
import * as formActions from './name_formatter.actions';
import { NameFormatterState } from "./name_formatter.state";

export const initialState: NameFormatterState = {
    firstName: '',
    lastName: '',
    middleName: '',
    fullName: '',
}

export const nameReducer = createReducer(
    initialState,
    on (formActions.displayFormattedNames, (state, {formattedFirstName, formattedLastName, formattedMiddleName})=>({
        ...state, 
        firstName: formattedFirstName,
        middleName: formattedMiddleName,
        lastName: formattedLastName,
    })
),
on (formActions.fName_first,(state, {formattedName})=>({
    ...state, 
    fullName: formattedName,
} )), 
on (formActions.lName_first, (state, {formattedName})=>({
    ...state,
    fullName: formattedName
}))
)