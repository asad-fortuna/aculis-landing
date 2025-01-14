// functions/submit-email.js

/**
 * onRequestPost handles POST requests to /submit-email
 * (Cloudflare Pages automatically maps the filename to the route)
 */
export const onRequestPost = async ({ request }) => {
    try {
      // 1. Parse the form data
      const formData = await request.formData();
      const email = formData.get('email');
  
      // 2. Basic server-side validation
      if (!email || !email.includes('@')) {
        return new Response(
          JSON.stringify({ error: 'Invalid email address' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
  
      // 3. Send an email via MailChannels
      //    (Cloudflare Worker-based approach)
      const mailData = {
        personalizations: [
          {
            to: [{ email: "asad@aculisai.com" }], // Replace with your actual email
          },
        ],
        from: { email: "noreply@aculisai.com" }, // A domain you own
        subject: "Aculis Invite Request",
        content: [
          {
            type: "text/plain",
            value: `New invite request from: ${email}`,
          },
        ],
      };
  
      const mailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mailData),
      });
  
      if (!mailResponse.ok) {
        const text = await mailResponse.text();
        throw new Error("MailChannels request failed: " + text);
      }
  
      // 4. Return a success response to the client
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
  
    } catch (err) {
      // Handle errors gracefully
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  };
  