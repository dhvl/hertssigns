import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = (formData.get("name") as string) || "Anonymous";
    const company = (formData.get("company") as string) || "Not specified";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "Not specified";
    const service = (formData.get("service") as string) || "General Inquiry";
    const message = (formData.get("message") as string) || "No message provided";
    const formType = (formData.get("formType") as string) || "Contact Form";

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Process attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    const files = formData.getAll("attachments[]") as File[];

    for (const file of files) {
      if (file && file.size > 0 && typeof file.arrayBuffer === "function") {
        const bytes = await file.arrayBuffer();
        attachments.push({
          filename: file.name,
          content: Buffer.from(bytes),
        });
      }
    }

    // Format service label
    const serviceLabels: Record<string, string> = {
      "vehicle-graphics": "Vehicle Graphics & Wrapping",
      "signage": "Commercial & Shopfront Signage",
      "window-films": "Window Films & Manifestation",
      "printing": "Large Format & Printing",
      "exhibitions": "Exhibitions & Display Stands",
      "clothing": "Clothing & Merchandise",
      "design": "Design Studio",
      "other": "Other / Bespoke Request",
    };
    const displayService = serviceLabels[service] || service;

    // 1. Send Notification Email to Sales Team (From: info@, To: sales@)
    const adminEmail = await resend.emails.send({
      from: "Herts Signs Website <info@hertssigns.co.uk>",
      to: ["sales@hertssigns.co.uk"],
      replyTo: email,
      subject: `🔔 New ${formType} Inquiry: ${name} (${displayService})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1c1c1f; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0A0A0B; padding: 24px; text-align: center; border-bottom: 3px solid #E8541E;">
            <h1 style="color: #F5F2EC; margin: 0; font-size: 22px; letter-spacing: 0.5px;">HERTS SIGNS GROUP</h1>
            <p style="color: #E8541E; margin: 6px 0 0 0; font-size: 13px; font-weight: bold; text-transform: uppercase;">New Website Inquiry</p>
          </div>
          
          <div style="padding: 28px; background-color: #ffffff;">
            <h2 style="color: #1c1c1f; margin-top: 0; font-size: 18px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;">Customer Information</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #666;">Full Name:</td>
                <td style="padding: 8px 0; color: #111; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Company:</td>
                <td style="padding: 8px 0; color: #111;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #E8541E; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #111; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Requested Service:</td>
                <td style="padding: 8px 0; color: #E8541E; font-weight: bold;">${displayService}</td>
              </tr>
            </table>

            <h2 style="color: #1c1c1f; font-size: 18px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px; margin-top: 24px;">Project Details & Message</h2>
            <div style="background-color: #f9f9fa; border-left: 4px solid #E8541E; padding: 16px; margin: 12px 0; font-size: 15px; color: #333; white-space: pre-wrap;">${message}</div>

            ${
              attachments.length > 0
                ? `<p style="margin-top: 20px; font-size: 13px; color: #666;">📎 <strong>${attachments.length} file(s) attached</strong> to this email.</p>`
                : ""
            }
          </div>

          <div style="background-color: #f4f4f5; padding: 16px; text-align: center; font-size: 12px; color: #71717a; border-top: 1px solid #e4e4e7;">
            Delivered to sales@hertssigns.co.uk | Sent from <a href="https://www.hertssigns.co.uk" style="color: #E8541E; text-decoration: none;">www.hertssigns.co.uk</a>
          </div>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    // 2. Send Professional Auto-Confirmation Email to Customer (From: info@, To: customer)
    try {
      await resend.emails.send({
        from: "Herts Signs Group <info@hertssigns.co.uk>",
        to: [email],
        subject: `Thank you for contacting Herts Signs Group - Quote Request Received`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1c1c1f; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0A0A0B; padding: 24px; text-align: center; border-bottom: 3px solid #E8541E;">
              <h1 style="color: #F5F2EC; margin: 0; font-size: 22px;">HERTS SIGNS GROUP</h1>
              <p style="color: #E8541E; margin: 6px 0 0 0; font-size: 13px;">EST. 1993 — HERTFORDSHIRE</p>
            </div>
            
            <div style="padding: 28px; background-color: #ffffff;">
              <h2 style="color: #111; margin-top: 0;">Hi ${name},</h2>
              <p style="font-size: 15px; color: #333;">Thank you for contacting Herts Signs Group regarding <strong>${displayService}</strong>.</p>
              
              <p style="font-size: 15px; color: #333;">We have received your project details and our team in Welwyn Garden City is reviewing your specifications. One of our specialists will be in touch shortly with an estimate or to discuss your requirements in detail.</p>
              
              <div style="background-color: #f9f9fa; border: 1px solid #eaeaea; border-radius: 6px; padding: 18px; margin: 24px 0;">
                <h3 style="margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #E8541E;">Need urgent assistance?</h3>
                <p style="margin: 4px 0 0 0; font-size: 14px; color: #444;">
                  Feel free to call our team directly:<br>
                  📞 <strong>Sales:</strong> <a href="tel:01707257575" style="color: #111; text-decoration: none;">01707 257 575</a><br>
                  📞 <strong>Design Studio:</strong> <a href="tel:01707275277" style="color: #111; text-decoration: none;">01707 275 277</a><br>
                  💬 <strong>WhatsApp:</strong> <a href="https://wa.me/447459367473" style="color: #25D366; text-decoration: none; font-weight: bold;">Chat with us on WhatsApp</a>
                </p>
              </div>

              <p style="font-size: 14px; color: #555; margin-bottom: 0;">Best regards,<br><strong>The Herts Signs Group Team</strong><br><span style="font-size: 12px; color: #888;">6 Blenheim Court, Welwyn Garden City, AL7 1AD</span></p>
            </div>
          </div>
        `,
      });
    } catch (clientEmailErr) {
      console.warn("Could not send customer confirmation email:", clientEmailErr);
    }

    return NextResponse.json({ success: true, data: adminEmail });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send message" },
      { status: 500 }
    );
  }
}
