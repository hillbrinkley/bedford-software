import type { APIRoute } from "astro";
import { sendEmail } from "../../../utils/email";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  // Get the form data submitted by the user on the home page
  const formData = await request.formData();

  const name = formData.get("name") as string | null;
  const business = formData.get("business") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const message = formData.get("message") as string | null;

  // Throw an error if we're missing any of the needed fields.
  if (!name || !business || !email || !phone || !message) {
    throw new Error("Missing required fields");
  }

  // Try to send the email using a `sendEmail` function we'll create next. Throw
  // an error if it fails.
  try {
    const toCustomerHtml = `<div>Thank you, ${name}. <br/><br/> We have recieved your request! <br/> We will be in touch soon. <br/><br/> Yours truly, <br/> Brinkley Hill <br/> Bedford Software LLC</div>`;
    const toManagerHtml = `<div>${name} ${business} ${email} ${phone}</div>`
    await sendEmail({ to: "brink@bedfordsoftware.com", subject: `${name} from ${business} is reaching out!`, html: toManagerHtml });

    await sendEmail({ to: email, subject: `Thank you for reaching out!`, html: toCustomerHtml });
  } catch (error) {
    throw new Error("Failed to send email");
  }

  // Redirect the user to a success page after the email is sent.
  return redirect("/success");
};