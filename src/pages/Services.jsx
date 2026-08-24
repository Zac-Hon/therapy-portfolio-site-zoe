import React from 'react';
import Layout from '../components/Layout.jsx';
import servicesData from '../../content/services.json';

export default function Services() {
  return (
    <Layout>
      <section className="page">
        <h1>{servicesData.title}</h1>
        <ul className="services-list">
          {servicesData.services.map((s) => (
            <li key={s.name} className="service-item">
              <h2>{s.name}</h2>
              <p>{s.description}</p>
              {s.duration && <p><strong>Duration:</strong> {s.duration}</p>}
              {s.price && <p><strong>Price:</strong> {s.price}</p>}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
