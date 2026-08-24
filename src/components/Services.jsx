import servicesData from '../content/services.json';

export function Services() {
  return (
    <section>
      <h2>{servicesData.title}</h2>
      <ul>
        {servicesData.services.map((s) => (
          <li key={s.name}>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            {s.duration && <p>Duration: {s.duration}</p>}
            {s.price && <p>Price: {s.price}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
