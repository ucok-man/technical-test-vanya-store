/* eslint-disable react/no-children-prop */
"use client";

import { Field, FieldError, FieldGroup } from "@/components/field";
import GradientButton from "@/components/gradient-button";
import { Input } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Textarea } from "@/components/textarea";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";

const PROBLEM_VARIANT = [
  { label: "Payment", value: "payment" },
  { label: "Delivery", value: "delivery" },
  { label: "Top Up", value: "topup" },
  { label: "Other", value: "other" },
];

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username minimal 3 karakter" })
    .max(50, { message: "Username maksimal 50 karakter" }),

  noInvoice: z.string().min(1, { message: "Nomor invoice wajib diisi" }),

  noWhatsapp: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,9}$/, {
    message: "Nomor WhatsApp tidak valid",
  }),

  problemVariant: z.enum([...PROBLEM_VARIANT.map((item) => item.value)], {
    error: "Jenis masalah tidak valid",
  }),

  problemDescription: z
    .string()
    .min(10, { message: "Deskripsi masalah minimal 10 karakter" }),
});

export default function ContactForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      noInvoice: "",
      noWhatsapp: "",
      problemVariant: "",
      problemDescription: "",
    },
    validators: {
      onSubmit: schema,
      onChange: schema,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        form.handleSubmit();
      }}
      className="w-full space-y-6"
    >
      <FieldGroup>
        <form.Field
          name="username"
          children={(field) => {
            const { state } = field;
            const isInvalid = state.meta.isTouched && !state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Username roblox kamu"
                  autoComplete="off"
                />
                {isInvalid && (
                  <FieldError
                    className="pl-5"
                    errors={field.state.meta.errors}
                  />
                )}
              </Field>
            );
          }}
        />
      </FieldGroup>

      <FieldGroup>
        <form.Field
          name="noInvoice"
          children={(field) => {
            const { state } = field;
            const isInvalid = state.meta.isTouched && !state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Nomor invoice kamu"
                  autoComplete="off"
                />
                {isInvalid && (
                  <FieldError
                    className="pl-5"
                    errors={field.state.meta.errors}
                  />
                )}
              </Field>
            );
          }}
        />
      </FieldGroup>

      <FieldGroup>
        <form.Field
          name="noWhatsapp"
          children={(field) => {
            const { state } = field;
            const isInvalid = state.meta.isTouched && !state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Nomor whatsapp kamu (cth: 081224983876)"
                  autoComplete="off"
                />
                {isInvalid && (
                  <FieldError
                    className="pl-5"
                    errors={field.state.meta.errors}
                  />
                )}
              </Field>
            );
          }}
        />
      </FieldGroup>

      <FieldGroup>
        <form.Field
          name="problemVariant"
          children={(field) => {
            const { state } = field;
            const isInvalid = state.meta.isTouched && !state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <Select
                  name={field.name}
                  value={field.state.value}
                  onValueChange={field.handleChange}
                >
                  <SelectTrigger aria-invalid={isInvalid} className="">
                    <SelectValue placeholder="Pilih jenis masalah" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    {PROBLEM_VARIANT.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {isInvalid && (
                  <FieldError
                    className="pl-5"
                    errors={field.state.meta.errors}
                  />
                )}
              </Field>
            );
          }}
        />
      </FieldGroup>

      <FieldGroup>
        <form.Field
          name="problemDescription"
          children={(field) => {
            const { state } = field;
            const isInvalid = state.meta.isTouched && !state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="Jelaskan masalah kamu lebih detail"
                  autoComplete="off"
                  rows={3}
                />
                {isInvalid && (
                  <FieldError
                    className="pl-5"
                    errors={field.state.meta.errors}
                  />
                )}
              </Field>
            );
          }}
        />
      </FieldGroup>

      <div className="flex items-center justify-center w-full">
        <GradientButton
          type="submit"
          className="w-fit text-base md:text-lg xl:text-xl"
        >
          Kirim Pesan Bantuan
        </GradientButton>
      </div>
    </form>
  );
}
