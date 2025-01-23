'use client'

import React from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, { message: 'must be at least 2 characters' }).max(50),
  email: z.string().email(),
  message: z.string(),
})

function ContactForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: '',
            email: '',
            message: '',
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 grid justify-center items-center">
      <div className="felx flex-cols-1 md:flex-rows-2 bg-[rgba(245,213,248,0.2)] rounded-lg p-8 justify-center items-center">
        <div className="flex flex-col md:flex-row gap-x-4 mb-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="block text-sm font-semibold">Name<span className="text-red-600"> *</span></FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} className="w-full mt-1 p-3 bg-themeblack text-themewhite rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="block text-sm font-semibold">Email<span className="text-red-600"> *</span></FormLabel>
                <FormControl>
                  <Input placeholder="abc@gmail.com" {...field} className="w-full mt-1 p-3 bg-themeblack text-themewhite rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col'>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-semibold">Message</FormLabel>
                <FormControl>
                  <textarea placeholder="message" {...field} className="p-4 w-full text-white rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />  
          <div className='flex justify-start items-center pt-4'>
           <Button type="submit" className=' bg-pink-500 hover:bg-pink-600 text-white w-32'>Submit</Button>  
          </div>  
        </div>
 
      </div>
    </form>
  </Form>
  )
}

export default ContactForm
