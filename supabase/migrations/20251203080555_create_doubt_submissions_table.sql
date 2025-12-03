/*
  # Create Doubt Submissions Table

  1. New Tables
    - `doubt_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `full_name` (text) - Student's full name
      - `mobile` (text) - Student's mobile number for contact
      - `physics_topic` (text) - Physics topic/doubt that needs clarification
      - `created_at` (timestamptz) - Timestamp when doubt was submitted
      - `status` (text) - Status of the doubt (pending, contacted, resolved)
  
  2. Security
    - Enable RLS on `doubt_submissions` table
    - Add policy to allow anyone to insert submissions (public form)
    - Add policy for authenticated admins to view all submissions
  
  3. Notes
    - This table stores student doubt submissions from the landing page
    - Mobile numbers are stored as text to preserve leading zeros
    - Default status is 'pending' for new submissions
*/

CREATE TABLE IF NOT EXISTS doubt_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  mobile text NOT NULL,
  physics_topic text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE doubt_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit doubts"
  ON doubt_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON doubt_submissions
  FOR SELECT
  TO authenticated
  USING (true);
