import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    RESEND_API_KEY: Boolean(process.env.RESEND_API_KEY),
    CONTACT_FROM_EMAIL: Boolean(process.env.CONTACT_FROM_EMAIL),
    GH_TOKEN: Boolean(process.env.GH_TOKEN),
    nodeEnv: process.env.NODE_ENV,
    envKeysSample: Object.keys(process.env).filter((k) => !k.startsWith("npm_") && !k.startsWith("AWS_")).sort(),
  });
}
