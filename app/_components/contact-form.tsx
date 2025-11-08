// app/_components/contact-form.tsx (Full Corrected Code - useActionState Fix)
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { 
  FormState, 
  submitContactForm, 
  contactSchema 
} from "@/app/actions"
// FIX: Changed import from useFormState to React.useActionState
import * as React from "react" 
import { useEffect } from "react"

// Define button styles
const CTA_BUTTON_BG = 'bg-[#A9D834] hover:bg-[#A9D834]/90 text-[#121111]';

// Initial state for the form
const initialState: FormState = {
  success: false,
  errors: null,
  message: "",
};

interface ContactFormProps {
    isHeroForm?: boolean;
}

export function ContactForm({ isHeroForm = false }: ContactFormProps) {
  // FIX: Updated hook name from useFormState to React.useActionState
  const [state, formAction] = React.useActionState(submitContactForm, initialState);

  // Optional: Show a notification on success
  useEffect(() => {
    if (state.success && state.message) {
        alert(state.message);
    }
  }, [state.success, state.message]);

  return (
    <form 
      action={formAction} // Bind the form directly to the Server Action
      // Adjusted margin for hero placement
      className={cn("space-y-4", isHeroForm ? 'max-w-none' : 'max-w-lg mx-auto')} 
    >
      <h2 className={cn("text-2xl font-bold text-center", isHeroForm ? 'mb-4' : 'mb-6 text-[#121111] dark:text-white')}>
          Request a Free Assessment
      </h2>
      
      {/* Global Message (Success or Internal Error) */}
      {state.message && (
        <div className={`p-3 rounded-md text-sm font-medium ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {state.message}
        </div>
      )}

      {/* --- ROW 1: Name and Email (Two-Column on Desktop) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Input */}
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="John Smith" 
            required 
            className="mt-1" 
          />
          {state.errors?.fieldErrors?.name && (
            <p className="text-sm text-red-600 mt-1">{state.errors.fieldErrors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input 
            id="email" 
            name="email" 
            type="email"
            placeholder="john@example.com" 
            required 
            className="mt-1" 
          />
          {state.errors?.fieldErrors?.email && (
            <p className="text-sm text-red-600 mt-1">{state.errors.fieldErrors.email}</p>
          )}
        </div>
      </div>
      
      {/* --- ROW 2: Phone and Service (Two-Column on Desktop) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone Input */}
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input 
            id="phone" 
            name="phone" 
            placeholder="082 627 7082" 
            required 
            className="mt-1" 
          />
          {state.errors?.fieldErrors?.phone && (
            <p className="text-sm text-red-600 mt-1">{state.errors.fieldErrors.phone}</p>
          )}
        </div>

        {/* Service Dropdown/Selector */}
        <div>
          <Label htmlFor="service">Service Needed *</Label>
          <select 
            id="service" 
            name="service" 
            required 
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#5AD5E2] focus:border-[#5AD5E2] sm:text-sm rounded-md border bg-background"
          >
            <option value="">Select a service type</option>
            <option value="commercial">Commercial Painting</option>
            <option value="waterproofing">Waterproofing / Damp Proofing</option>
            <option value="repairs">Structural / Spalling Repairs</option>
            <option value="specialized">Specialized Floor Coatings</option>
            <option value="other">Other / General Quote</option>
          </select>
          {state.errors?.fieldErrors?.service && (
            <p className="text-sm text-red-600 mt-1">{state.errors.fieldErrors.service}</p>
          )}
        </div>
      </div>

      {/* Message Textarea (Full Width) */}
      <div>
        <Label htmlFor="message">Project Details</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Tell us about your project..." 
          required 
          rows={3} // Reduced rows to save vertical space
          className="mt-1" 
        />
        {state.errors?.fieldErrors?.message && (
          <p className="text-sm text-red-600 mt-1">{state.errors.fieldErrors.message}</p>
        )}
      </div>

      {/* Terms Checkbox - Mocked for visual structure */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" name="terms" required/>
        <Label htmlFor="terms" className="text-sm font-normal">
          I agree to the Terms of Service.
        </Label>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className={cn("w-full h-10 text-lg font-bold", CTA_BUTTON_BG)}
      >
        Submit Request
      </Button>
    </form>
  );
}