import { FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils';
import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import { z } from "zod";


const formSchema = authFormSchema('sign-up')


interface Custominput {
   control: Control<z.infer<typeof formSchema>>,
   name: FieldPath<z.infer<typeof formSchema>>,
   label: string, 
   placeholder:string 
}

const Custominput = ({ control, name, label, placeholder }:Custominput) => {
  return (
 
          <FormField
              control={control}
              name={name}
              render={({ field }) => (
            <div className="form-item">
              <FormLabel className="form-label">{label}</FormLabel>
              <div className=" flex w-full flex-col">
               <FormControl>
                <Input placeholder={placeholder}
                 className="input-class"
                 type={name === 'password' ? 'password' : 'text'}
                 {...field}
                 />
               </FormControl>
               <FormMessage className="form-message mt-2" />
            </div>
          </div>
   )}
 />  
  )
}

export default Custominput