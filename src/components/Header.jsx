import settings from '../content/settings.json';

export function Header() {
  return (
    <header>
      <h1>{settings.therapist_name}</h1>
      <p>{settings.location}</p>
      <a href={`mailto:${settings.email}`}>{settings.email}</a>
      {settings.phone && <p>{settings.phone}</p>}
    </header>
  );
}
