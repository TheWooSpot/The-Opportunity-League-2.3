/*
  # Create events table

  1. New Tables
    - `events`
      - `id` (uuid, primary key) - Unique identifier for each event
      - `title` (text) - Event title
      - `description` (text) - Event description
      - `date` (date) - Event date
      - `time` (text) - Event time
      - `location` (text) - Event location
      - `image` (text) - Image URL for the event
      - `age_range` (text) - Target age range (Infancy, Toddler, Preschool, School-Age, Early Teens, Late Teens, or All)
      - `interest` (text) - Event interest category (Youth Sports, Mentorship, STEM, Arts, etc.)
      - `day_of_week` (text) - Day of the week the event occurs on
      - `category` (text) - Event category (Sports, Education, Community, Leadership)
      - `created_at` (timestamptz) - Timestamp of creation

  2. Security
    - Enable RLS on `events` table
    - Add policy for public read access (all events are publicly viewable)
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  location text NOT NULL,
  image text NOT NULL,
  age_range text NOT NULL,
  interest text NOT NULL,
  day_of_week text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are publicly viewable"
  ON events
  FOR SELECT
  TO anon, authenticated
  USING (true);