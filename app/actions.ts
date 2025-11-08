// app/actions.ts (Full File Content - Server Action)
"use server"

import { z } from "zod"
import { redirect } from "next/navigation"

// 1. Define the Zod Schema (Single Source of Truth for validation)
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  service: z.string().min(1, "Please select a service type."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message is too long."),
});

// Define the shape of the Server Action response
export type FormState = {
  success: boolean;
  errors: z.inferFlattenedErrors<typeof contactSchema> | null;
  message: string;
};

// 2. The Server Action function
export async function submitContactForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const data = Object.fromEntries(formData);
  
  // Server-Side Validation (CRITICAL SECURITY STEP) [cite: 1144]
  const validatedFields = contactSchema.safeParse(data);

  // If validation fails, return the errors [cite: 1145]
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten(),
      message: "Validation failed. Please check the fields and try again.",
    };
  }

  // 3. Database/Email Processing (Mocked)
  try {
    // In a real application, this is where you would:
    // a) Save data to a database (e.g., Prisma, MongoDB)
    // b) Send an email notification (e.g., Nodemailer, Resend)
    console.log("Processing form submission on server:", validatedFields.data);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

    // 4. Success handling
    // For a simple redirect on success:
    // redirect('/thank-you'); 

    return {
        success: true,
        errors: null,
        message: "Thank you! Your quote request has been received. We will contact you shortly.",
    };
  } catch (error) {
    // Handle specific processing errors (e.g., database connection failure)
    console.error("Server Action Error:", error);
    return {
      success: false,
      errors: null,
      message: "An internal error occurred. Please try again later.",
    };
  }
}