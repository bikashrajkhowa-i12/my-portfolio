import emailjs from "emailjs-com";

export const sendMessage = async ({ formRef }) => {
  try {
    return await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    throw error;
  }
};
