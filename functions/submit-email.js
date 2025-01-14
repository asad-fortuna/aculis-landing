// functions/submit-email.js

export const onRequestPost = async (context) => {
  const { request, env } = context;

  try {
    // 1. Parse the form data
    const formData = await request.formData();
    const email = formData.get('email');

    // 2. Basic validation
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Create or reference the "invites" table
    //    (Optional: only run this CREATE TABLE IF NOT EXISTS once, or in a migration step)
    await env.DB.exec(` 
      CREATE TABLE IF NOT EXISTS invites (
        id INTEGER PRIMARY KEY,
        email TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 4. Insert the email into the D1 database
    //    Using a parameterized statement to avoid manual string building
    await env.DB.prepare(`
      INSERT INTO invites (email)
      VALUES (?);
    `)
      .bind(email)
      .run();

    // 5. Return a success response
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    // Handle errors
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
