import { FormArray, FormControl } from '@angular/forms'

export class Task{
    name: string
    summary: string
    subTask: Array<{name:string, links: Array<String>}>
    notes: string

    constructor(p_name: string, p_summary: string)
    {
        this.name = p_name;
        this.summary = p_summary;
    }

}