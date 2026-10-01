import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pb-16 pt-8 text-sm text-zinc-500">
      <p>
        Designed & built by <span className="text-zinc-300">{profile.name}</span>.
      </p>
      <p className="mt-1">© {new Date().getFullYear()} · {profile.location}</p>
    </footer>
  );
}
