import { FormGroup } from "@angular/forms";

export const InvalidFormField = (form: FormGroup, field: string): boolean => {
    return (
        form.get(field).invalid && form.get(field).touched
    );
}