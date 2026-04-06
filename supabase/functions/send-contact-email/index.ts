import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactData {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  preferred_time?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const contactData: ContactData = await req.json();

    console.log('📧 Processing contact form submission from:', contactData.name);

    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.phone || !contactData.company_name || !contactData.message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'All required fields must be provided' 
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Sanitize input data
    const sanitize = (str: string) => str.replace(/[<>]/g, '');
    const sanitizedData = {
      name: sanitize(contactData.name),
      email: sanitize(contactData.email),
      phone: sanitize(contactData.phone),
      company_name: sanitize(contactData.company_name),
      preferred_time: contactData.preferred_time ? sanitize(contactData.preferred_time) : 'Not specified',
      message: sanitize(contactData.message),
    };

    const timestamp = new Date().toLocaleString('en-US', { 
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const emailSubject = `New Contact Form Submission - ${sanitizedData.company_name}`;
    
    const emailBodyHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6; 
      color: #333; 
      margin: 0; 
      padding: 0;
      background-color: #f4f4f4;
    }
    .container { 
      max-width: 600px; 
      margin: 40px auto;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .header { 
      background: linear-gradient(135deg, #1DAA6C 0%, #168B57 100%); 
      color: white; 
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 { 
      margin: 0; 
      font-size: 28px;
      font-weight: 600;
    }
    .content { 
      padding: 40px 30px;
    }
    .field { 
      background: #f9f9f9;
      margin-bottom: 20px; 
      padding: 15px 20px;
      border-radius: 6px;
      border-left: 4px solid #1DAA6C;
    }
    .label { 
      font-weight: 600;
      color: #1DAA6C;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      display: block;
    }
    .value { 
      color: #333;
      font-size: 16px;
      word-wrap: break-word;
    }
    .value a { 
      color: #1DAA6C;
      text-decoration: none;
    }
    .value a:hover {
      text-decoration: underline;
    }
    .message-box { 
      background: #f9f9f9;
      padding: 20px;
      border-radius: 6px;
      border-left: 4px solid #1DAA6C;
      white-space: pre-wrap;
      line-height: 1.8;
    }
    .footer { 
      background: #2d2d2d;
      color: #999;
      text-align: center;
      padding: 30px;
      font-size: 13px;
    }
    .footer p {
      margin: 5px 0;
    }
    .cta-button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 30px;
      background: #1DAA6C;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 New Contact Form Submission</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">EVOX LLC - Business Automation</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">👤 Client Name</span>
        <div class="value">${sanitizedData.name}</div>
      </div>
      
      <div class="field">
        <span class="label">📧 Email Address</span>
        <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
      </div>
      
      <div class="field">
        <span class="label">📱 Phone Number</span>
        <div class="value"><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></div>
      </div>
      
      <div class="field">
        <span class="label">🏢 Company Name</span>
        <div class="value">${sanitizedData.company_name}</div>
      </div>
      
      <div class="field">
        <span class="label">📅 Preferred Consultation Time</span>
        <div class="value">${sanitizedData.preferred_time}</div>
      </div>
      
      <div class="field">
        <span class="label">💬 Message</span>
        <div class="message-box">${sanitizedData.message}</div>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <a href="mailto:${sanitizedData.email}" class="cta-button">Reply to Client</a>
      </div>
    </div>
    <div class="footer">
      <p><strong>Submitted:</strong> ${timestamp}</p>
      <p style="margin-top: 15px;">EVOX LLC - Miami's Premier Automation Agency</p>
      <p>Transform repetitive tasks into intelligent automated workflows</p>
    </div>
  </div>
</body>
</html>
    `;

    const resendApiKey = 're_CRbrx1oB_LEnvBPoUUJjz3QbENrSCWZ5b';

    console.log('📤 Sending email via Resend API...');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'EVOX LLC <admin@evoxautomation.cloud>',
        to: ['admin@evoxautomation.cloud'],
        replyTo: sanitizedData.email,
        subject: `New Contact from ${sanitizedData.company_name} - EVOX LLC`,
        html: emailBodyHTML,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error('❌ Resend API error:', errorData);
      throw new Error(`Failed to send email: ${resendResponse.status} - ${errorData}`);
    }

    const emailData = await resendResponse.json();
    console.log('✅ Email sent successfully:', emailData.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: emailData.id 
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('❌ Error processing request:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error instanceof Error ? error.message : 'Failed to process contact form'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});