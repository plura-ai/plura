import { Resend } from "resend";
import { PluraResend } from "./template/template";
const resendEnv = process.env.RESEND_API;
export const resend = new Resend(resendEnv);

export const sendEmail = async (
  email: string,
  subject: string,
) => {
  const emailData = {
    from: "example@mail.plura.pro",
    to: email,
    subject: subject,
    react: PluraResend(),
  };
  
  return await resend.emails.send(emailData);
};
export const sendBatchEmail = async (
  emails: string[],
  subject: string,
) => {
  const emailData = {
    from: "example@mail.plura.pro",
    to: emails,
    subject: subject,
    react: PluraResend(),
  };
  return await resend.emails.send(emailData);
};

export const cancelEmail = (id: string) => {
  resend.emails.cancel(id);
};
 
export const updateEmail = (id:string)=>{
  const oneMinuteFromNow = new Date(Date.now() + 1000 * 60).toISOString();
  resend.emails.update({id , scheduledAt: oneMinuteFromNow});
}