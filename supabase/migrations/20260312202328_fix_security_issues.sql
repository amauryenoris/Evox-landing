/*
  # Fix Security Issues

  1. Issues Fixed
    - Remove unused indexes on created_at and status
    - Replace overly permissive RLS policy with proper validation
    - Add basic validation to prevent trivial submissions
  
  2. RLS Policy Changes
    - Replace `WITH CHECK (true)` with actual validation
    - Require non-empty values for critical fields (name, email, phone, message)
    - Prevent obviously invalid submissions while keeping form accessible to public
  
  3. Index Removal
    - Drop idx_contact_submissions_created_at (not being used)
    - Drop idx_contact_submissions_status (not being used)
  
  4. Notes
    - Public users can still submit contact forms
    - Basic field validation prevents obviously invalid/spam submissions
    - Email validation happens on frontend and via Resend API
    - Auth DB connection strategy note: This is a Supabase account-level setting, not database-level
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_contact_submissions_created_at;
DROP INDEX IF EXISTS idx_contact_submissions_status;

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Public can submit contact form" ON contact_submissions;

-- Create new policy with basic validation to prevent trivial submissions
CREATE POLICY "Public can submit valid contact form"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (
    name IS NOT NULL AND name != '' AND
    email IS NOT NULL AND email != '' AND
    phone IS NOT NULL AND phone != '' AND
    message IS NOT NULL AND message != '' AND
    company_name IS NOT NULL AND company_name != ''
  );
