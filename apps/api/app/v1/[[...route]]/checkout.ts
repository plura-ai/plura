import { type NextRequest, NextResponse } from 'next/server'
import { polar } from "@plura/mor";

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const productPriceId = url.searchParams.get('priceId') ?? ''
  // Polar will replace {CHECKOUT_ID} with the actual checkout ID upon a confirmed checkout
  const confirmationUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}/confirmation?checkout_id={CHECKOUT_ID}`

  try {
    const result = await polar.checkouts.custom.create({
      productPriceId,
      successUrl: confirmationUrl,
    })

    return NextResponse.redirect(result.url)
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}