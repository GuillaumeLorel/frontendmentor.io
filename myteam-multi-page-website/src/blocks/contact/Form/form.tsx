"use client";
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { buildInitialFormState } from "./buildInitialFormState";
import { fields } from "./fields";
import { Form as FormType } from "@payloadcms/plugin-form-builder/types";

export type FormBlockType = {
  blockName?: string;
  blockType?: "formBlock";
  form: FormType;
};

type FormData = {
  name: string;
  email: string;
  company_name: string;
  title: string;
  message: string;
};

export const FormBlock: React.FC<
  FormBlockType & {
    id?: string;
  }
> = (props) => {
  const {
    form: formFromProps,
    form: {
      id: formID,
      submitButtonLabel,
      confirmationType,
      redirect,
      confirmationMessage,
    },
  } = props;

  const formMethods = useForm<FormData>({
    defaultValues: buildInitialFormState(formFromProps.fields),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = formMethods;

  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>();
  const [error, setError] = useState<
    { status?: string; message: string } | undefined
  >();

  const onSubmit = useCallback(
    (data: FormData) => {
      let loadingTimerID: ReturnType<typeof setTimeout>;

      const submitForm = async () => {
        setError(undefined);

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }));

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true);
        }, 1000);

        try {
          const req = await fetch(
            `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/form-submissions`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                form: formID,
                submissionData: dataToSend,
              }),
            }
          );

          const res = await req.json();

          clearTimeout(loadingTimerID);

          if (req.status >= 400) {
            setIsLoading(false);
            setError({
              status: res.status,
              message: res.errors?.[0]?.message || "Internal Server Error",
            });

            return;
          }

          setIsLoading(false);
          setHasSubmitted(true);

          reset();

          if (confirmationType === "redirect" && redirect) {
            const { url } = redirect;
            window.location.href = url;
          }
        } catch (err) {
          console.warn(err);
          setIsLoading(false);
          setError({
            message: "Something went wrong.",
          });
        }
      };

      submitForm();
    },
    [formID, redirect, confirmationType]
  );

  return (
    <div className="flex-1">
      {error && <div>{`${error.status || "500"}: ${error.message || ""}`}</div>}
      <form id={formID} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          {formFromProps &&
            formFromProps.fields &&
            formFromProps.fields.map((field, index) => {
              const Field: React.FC<any> | undefined =
                fields?.[field.blockType as keyof typeof fields];
              if (Field) {
                return (
                  <React.Fragment key={index}>
                    <Field
                      form={formFromProps}
                      {...field}
                      {...formMethods}
                      register={register}
                      errors={errors}
                      control={control}
                    />
                  </React.Fragment>
                );
              }
              return null;
            })}
        </div>
        {!hasSubmitted ? (
          <button
            type="submit"
            className="text-base-lg leading-base-lg text-secondary-deep-jungle-green
          font-semibold py-[9px] px-8 border-[2px] border-solid border-white bg-white
          rounded-3xl"
          >
            {submitButtonLabel}
          </button>
        ) : (
          <p className="text-white">
            {confirmationMessage.root.children[0].children[0].text}
          </p>
        )}
      </form>
    </div>
  );
};
