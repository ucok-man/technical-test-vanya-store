"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/lib/utils";
import Icons from "../icons";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "py-3 px-4 last:mb-0 rounded-2xl transition-all data-[state=open]:bg-brand-primary-50 space-y-3",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-start justify-between gap-4 rounded-md text-left text-brand-dark-500 data-[state=open]:text-primary font-chillax font-semibold outline-none disabled:pointer-events-none disabled:opacity-50 transition-all duration-200",
          className
        )}
        {...props}
      >
        {children}

        <div className="relative">
          <Icons.plus className="absolute top-0 right-0 pointer-events-none size-6 fill-brand-dark-500 shrink-0 translate-y-0.5 opacity-100 group-data-[state=open]:opacity-0" />

          <Icons.minus className="absolute top-0 right-0 pointer-events-none size-6 fill-primary shrink-0 translate-y-0.5 opacity-0 group-data-[state=open]:opacity-100" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
