import React from 'react';
import Layout from '../components/Layout.jsx';
import about from '../../content/about.json';

export default function About() {
  return (
    <Layout>
      <section className="page">
        <h1>{about.title}</h1>
        <div
          className="page-body"
          dangerouslySetInnerHTML={{ __html: about.body }}
        />
      </section>
    </Layout>
  );
}
