import type { Context } from "https://edge.netlify.com";
import { crypto } from "https://deno.land/std@0.155.0/crypto/mod.ts";

export default async (request: Request, context: Context) => {

  const val = crypto.randomUUID();
  
  return {
    statusCode: 200,
    context.json({ uuid: val })
  }

};