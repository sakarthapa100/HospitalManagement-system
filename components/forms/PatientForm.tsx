"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../ui/CustomFormField"
import SubmitButton from "../ui/SubmitButton"
import UserFormValidation from "@/lib/validation"
import { createUser } from "@/lib/patient.action"

export enum FormFieldType {
  INPUT = 'input',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TEXTAREA = 'textarea',
  DATEPICKER = 'datepicker',
  TIMEPICKER = 'timepicker',
  PHONE = 'phone',
}

export function PatientForm() {
  const [isLoading, setIsLoading] = useState(false)


  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  async function onSubmit(values: z.infer<typeof UserFormValidation>) {
    setIsLoading(true)
    try {
      const user = await createUser(values)
      if (user) router.push(`/appointments/${user._id}/register`)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section>
          <h1 className="header"> Hi there, ....</h1>
          <p className="mb-4 mt-4 text-lg ">Get Started with Appointments.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email Address"
          placeholder="Rambdr@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="3423423"
          iconAlt="user"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}
