/*
  # Fix Contact Submissions RLS Policy

  1. Changes
    - Drop the existing restrictive policy that only allows 'anon' role
    - Create new policy that allows both anonymous (anon) and authenticated users to submit
    - This ensures the contact form works regardless of authentication state

  2. Security
    - Public users can INSERT contact form submissions
    - Policy applies to both 'anon' and 'authenticated' roles
    - No SELECT/UPDATE/DELETE for public users to protect data privacy
*/

-- Drop the old restrictive policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create new policy that works for both anon and authenticated users
CREATE POLICY "Public can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);
