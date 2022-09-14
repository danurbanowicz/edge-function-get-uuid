import type { Context } from "https://edge.netlify.com";
import { v4 } from "https://deno.land/std@0.136.0/uuid/mod.ts";

export default async (request: Request, context: Context) => {

  const val = v4.generate();
  
  return context.json({ 
    uuid: val
  });

};