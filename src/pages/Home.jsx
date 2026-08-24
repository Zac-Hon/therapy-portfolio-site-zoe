import React from 'react';
import Layout from '../components/Layout.jsx';
import home from '../../content/home.json';
import settings from '../../content/settings.json';

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-text">
          <h1>{home.headline}</h1>
          <h2>{home.subheadline}</h2>
          <div
            className="hero-body"
            dangerouslySetInnerHTML={{ __html: home.body }}
          />
          <div className="hero-contact">
            <p>
              Email:{' '}
              <a href={`mailto:${settings.email}`}>{settings.email}</a>
            </p>
            {settings.phone && <p>Phone: {settings.phone}</p>}
          </div>
        </div>
        {settings.profile_image && (
          <div className="hero-image">
            <img src={settings.profile_image} alt={settings.therapist_name} />
          </div>
        )}
      </section>
    </Layout>
  );
}
