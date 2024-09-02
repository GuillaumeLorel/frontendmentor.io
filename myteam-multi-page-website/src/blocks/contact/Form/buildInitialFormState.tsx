import { FormFieldBlock } from "@payloadcms/plugin-form-builder/types";

export const buildInitialFormState = (fields: FormFieldBlock[]) => {
  return fields.reduce((initialSchema, field) => {
    if (field.blockType === "email" || field.blockType === "text") {
      return {
        ...initialSchema,
        [field.name]: "",
      };
    }
    return initialSchema;
  }, {} as Record<string, any>);
};
