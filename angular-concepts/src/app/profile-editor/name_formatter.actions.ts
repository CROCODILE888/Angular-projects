import { createAction, props } from "@ngrx/store";

export const displayFormattedNames = createAction('[Name] Display Formatted Names',
props<{formattedMiddleName: string | undefined | null, formattedFirstName: string |null| undefined, formattedLastName: string | undefined | null}>());

export const fName_first = createAction('[Name] Display First name first', props<{formattedName: string | undefined}>());

export const lName_first = createAction('[Name] Display Last name first', props<{formattedName: string | undefined}>());