import { User } from "./utilityModels";

// Return Type (Tipo do Retorno)
async function sendEmail(
  user: Pick<User, "email" | "firstName">,
  message: string
): Promise<string> {
  return message;
}

type SendEmailFn = typeof sendEmail;

type Return = Awaited<ReturnType<SendEmailFn>>;

type T1 = Promise<Promise<string>>;

// Awaited remove recursivamente as Promise
type T2 = Awaited<T1>;
// type T2 = string

type T3 = Awaited<boolean | Promise<string>>;
// type T3 = string | boolean
