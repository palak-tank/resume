import { profile } from '../data/resume.js';

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} {profile.name} · {profile.location}
    </footer>
  );
}
