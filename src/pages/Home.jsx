import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout.jsx';

import home from '../../content/home.json';
import about from '../../content/about.json';
import servicesData from '../../content/services.json';
import settings from '../../content/settings.json';
import professional from '../../content/professional.json';
import site from '../../content/site.json';

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  TextField,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Reveal({ children, delay = 0 }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  );

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2, rootMargin: '0px 0px -20% 0px' });

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={elementRef}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.995)',
        filter: visible ? 'blur(0)' : 'blur(0.5px)',
        transition: `opacity 900ms cubic-bezier(.22, 1, .36, 1) ${delay}ms, transform 900ms cubic-bezier(.22, 1, .36, 1) ${delay}ms, filter 900ms ease ${delay}ms`,
        '@media (prefers-reduced-motion: reduce)': {
          opacity: 1,
          transform: 'none',
          filter: 'none',
          transition: 'none',
        },
      }}
    >
      {children}
    </Box>
  );
}

export default function OnePage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry for ${settings.therapist_name}`);
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`,
    );
    window.location.href = `mailto:${settings.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>

      {/* HOME / HERO */}
      <Box
        id="home"
        sx={{
            position: 'relative',
            overflow: 'hidden',
            py: 12,
            background: 'linear-gradient(180deg, #E8F4F4 0%, #FFFFFF 100%)',
        }}
        >
        {/* Background shape */}
        <Box
            sx={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 300,
            height: 300,
            borderRadius: '50%',
            backgroundColor: '#CFE8E8',
            opacity: 0.4,
            filter: 'blur(40px)',
            }}
        />

        <Box
          sx={{
            maxWidth: 1100,
            mx: 'auto',
            px: { xs: 2, sm: 3 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Reveal>
          <Box>
          <Typography variant="h1" sx={{ mb: 2, maxWidth: 700 }}>
                {home.headline}
            </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ mb: 3, fontSize: 'clamp(1.15rem, 2vw, 1.5rem)' }}>
                {home.subheadline}
            </Typography>

            <Box
                sx={{ mb: 3 }}
                dangerouslySetInnerHTML={{ __html: home.body }}
            />

            <Button
                variant="contained"
                size="large"
                href={`mailto:${settings.email}`}
                sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontSize: '1.1rem',
                }}
            >
                {site.hero.ctaLabel}
            </Button>
            </Box>
          </Reveal>

            <Reveal delay={120}>
            <Box>
            <Card
                elevation={4}
                sx={{
                borderRadius: 4,
                overflow: 'hidden',
                width: 'min(100%, 440px)',
                mx: 'auto',
                boxShadow: '0 24px 60px rgba(31, 63, 62, 0.14)',
                }}
            >
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '4 / 5',
                    display: 'grid',
                    placeItems: 'center',
                    background: 'linear-gradient(145deg, #DCEDEA 0%, #B9D4CF 100%)',
                  }}
                >
                  <Typography
                    variant="h1"
                    color="primary.dark"
                    sx={{ opacity: 0.7, fontSize: 'clamp(4rem, 10vw, 7rem)' }}
                  >
                    {settings.therapist_name.split(' ').map((name) => name[0]).join('')}
                  </Typography>
                  <CardMedia
                    component="img"
                    image={settings.profile_image}
                    alt={settings.therapist_name}
                    onError={(event) => { event.currentTarget.style.display = 'none'; }}
                    sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
            </Card>
            </Box>
            </Reveal>
          </Box>
    </Box>


      {/* ABOUT */}
      <Box
        id="about"
        sx={{
            py: { xs: 8, md: 12 },
            backgroundColor: '#FAFAFA',
        }}
        >
        <Reveal>
        <Box
          sx={{
            maxWidth: 1060,
            mx: 'auto',
            px: { xs: 2, sm: 3 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.7fr) minmax(0, 1.3fr)' },
            gap: { xs: 4, md: 10 },
            alignItems: 'start',
          }}
        >
          <Box>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.14em', fontWeight: 700 }}>
              {site.about.eyebrow}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              {about.title}
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 280, lineHeight: 1.6 }}>
              {site.about.supportingText}
            </Typography>
          </Box>

          <Box
            sx={{
              pl: { xs: 2.5, md: 4 },
              borderLeft: '3px solid #75A9A0',
              '& p:first-of-type': { mt: 0 },
              '& p:last-of-type': { mb: 0 },
            }}
          >
            <Box
              sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.85, maxWidth: 680 }}
              dangerouslySetInnerHTML={{ __html: about.body }}
            />
            <Button
              href="#contact"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 3, px: 0, '&:hover': { backgroundColor: 'transparent', color: 'primary.dark' } }}
            >
              {site.about.ctaLabel}
            </Button>
          </Box>
        </Box>
        </Reveal>
      </Box>


      {/* SERVICES */}
      <Box id="services" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF' }}>
        <Box sx={{ maxWidth: 1060, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Reveal>
          <Box sx={{ maxWidth: 620, mb: { xs: 4, md: 5 } }}>
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: '0.14em', fontWeight: 700 }}
            >
              {site.services.eyebrow}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 600 }}>
              {servicesData.title}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: '1.08rem', lineHeight: 1.7 }}>
              {site.services.intro}
            </Typography>
          </Box>
          </Reveal>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(2, minmax(0, 1fr))' },
              gap: { xs: 2, md: 3 },
              alignItems: 'stretch',
            }}
          >
            {servicesData.services.map((s) => (
              <Reveal key={s.name} delay={120 * (servicesData.services.indexOf(s) % 2)}>
              <Box sx={{ minWidth: 0 }}>
                <Card
                  component="a"
                  href={`mailto:${settings.email}?subject=${encodeURIComponent(`Enquiry about ${s.name}`)}`}
                  aria-label={`Email Zoe about ${s.name}`}
                  elevation={0}
                  sx={{
                    height: '100%',
                    border: 'none',
                    borderRadius: 3,
                    backgroundColor: '#FFFFFF',
                    color: 'inherit',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 28px rgba(31, 63, 62, 0.07)',
                    transition: 'box-shadow 220ms ease, transform 220ms ease',
                    '&:hover': {
                      boxShadow: '0 18px 36px rgba(31, 63, 62, 0.12)',
                      transform: 'translateY(-3px)',
                      '& .service-arrow': {
                        backgroundColor: '#D6EAE5',
                        transform: 'translateX(3px)',
                      },
                    },
                  }}
                >
                  <Box sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography variant="h4" sx={{ mb: 1.5, fontWeight: 600, fontSize: '1.45rem' }}>
                      {s.name}
                    </Typography>

                    <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                      {s.description}
                    </Typography>

                    <Box
                      sx={{
                        pt: 2,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                        color: 'text.secondary',
                      }}
                    >
                      {s.duration && (
                        <Typography variant="body2">
                          <strong>{site.services.durationLabel}</strong><br />{s.duration}
                        </Typography>
                      )}
                      {s.price && (
                        <Typography variant="body2" sx={{ ml: { sm: 3 } }}>
                          <strong>{site.services.priceLabel}</strong><br />{s.price}
                        </Typography>
                      )}
                    </Box>
                    <Box
                      sx={{
                        mt: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 1,
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                      }}
                    >
                      {site.services.ctaLabel}
                      <Box
                        className="service-arrow"
                        sx={{
                          display: 'grid',
                          placeItems: 'center',
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          backgroundColor: '#E8F3F0',
                          transition: 'background-color 180ms ease, transform 180ms ease',
                        }}
                      >
                        <ArrowForwardIcon sx={{ fontSize: '1.1rem' }} />
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Box>
              </Reveal>
            ))}
          </Box>
        </Box>
      </Box>


      {/* APPROACH */}
      <Box id="approach" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#F5F9F8' }}>
        <Reveal>
          <Box
            sx={{
              maxWidth: 1060,
              mx: 'auto',
              px: { xs: 2, sm: 3 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.85fr) minmax(0, 1.15fr)' },
              gap: { xs: 4, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.14em', fontWeight: 700 }}>
                {professional.approach.eyebrow}
              </Typography>
              <Typography variant="h2" sx={{ mt: 1 }}>
                {professional.approach.title}
              </Typography>
            </Box>
            <Box>
              <Typography color="text.secondary" sx={{ mb: 3, fontSize: '1.08rem', lineHeight: 1.75 }}>
                {professional.approach.body}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
                  gap: { xs: 2.5, sm: 3 },
                }}
              >
                {professional.approach.principles.map((principle, index) => (
                  <Box key={principle} sx={{ pt: 2, borderTop: '2px solid #75A9A0' }}>
                    <Typography color="primary" sx={{ mb: 1, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em' }}>
                      0{index + 1}
                    </Typography>
                    <Typography sx={{ lineHeight: 1.5 }}>{principle}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Box>

      {/* WHO I WORK WITH */}
      <Box id="who-i-work-with" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF' }}>
        <Reveal>
          <Box sx={{ maxWidth: 1060, mx: 'auto', px: { xs: 2, sm: 3 } }}>
            <Box sx={{ maxWidth: 620, mb: { xs: 4, md: 5 } }}>
              <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.14em', fontWeight: 700 }}>
                {professional.whoIWorkWith.eyebrow}
              </Typography>
              <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                {professional.whoIWorkWith.title}
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {professional.whoIWorkWith.body}
              </Typography>
            </Box>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' },
                gap: 1.5,
              }}
            >
              {professional.whoIWorkWith.concerns.map((concern) => (
                <Box component="li" key={concern} sx={{ p: 2.5, borderBottom: '1px solid #D7E4E2' }}>
                  {concern}
                </Box>
              ))}
            </Box>
          </Box>
        </Reveal>
      </Box>

      {/* QUALIFICATIONS */}
      <Box id="qualifications" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#F5F9F8' }}>
        <Reveal>
          <Box
            sx={{
              maxWidth: 1060,
              mx: 'auto',
              px: { xs: 2, sm: 3 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.8fr) minmax(0, 1.2fr)' },
              gap: { xs: 4, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.14em', fontWeight: 700 }}>
                {professional.qualifications.eyebrow}
              </Typography>
              <Typography variant="h2" sx={{ mt: 1 }}>
                {professional.qualifications.title}
              </Typography>
            </Box>
            <Box>
              <Typography color="text.secondary" sx={{ mb: 3, fontSize: '1.08rem', lineHeight: 1.75 }}>
                {professional.qualifications.body}
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', borderTop: '1px solid #C7DDD8' }}>
                {professional.qualifications.details.map((detail, index) => (
                  <Box
                    component="li"
                    key={detail}
                    sx={{
                      py: 1.75,
                      display: 'flex',
                      gap: 2,
                      alignItems: 'baseline',
                      borderBottom: '1px solid #C7DDD8',
                    }}
                  >
                    <Typography color="primary" sx={{ minWidth: 24, fontWeight: 700, fontSize: '0.85rem' }}>
                      0{index + 1}
                    </Typography>
                    <Typography>{detail}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Box>

      {/* CONTACT */}
      <Box id="contact" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#EEF6F4' }}>
        <Box sx={{ maxWidth: 1080, mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Reveal>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(240px, 0.75fr) minmax(0, 1.25fr)' },
              gap: { xs: 4, md: 9 },
              alignItems: 'start',
            }}
          >
          <Box sx={{ pt: { md: 2 } }}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.14em', fontWeight: 700 }}>
              {site.contact.eyebrow}
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              {site.contact.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 430, mb: 4 }}>
              {site.contact.intro}{' '}
              <a href={`mailto:${settings.email}`}>{settings.email}</a>.
            </Typography>
            <Box sx={{ borderTop: '1px solid #C6DCD8', pt: 2.5, maxWidth: 360 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                <strong>{site.contact.emailLabel}</strong><br />{settings.email}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                <strong>{site.contact.locationLabel}</strong><br />{settings.location}
              </Typography>
              {settings.phone && (
                <Typography variant="body2" color="text.secondary">
                  <strong>{site.contact.phoneLabel}</strong><br />{settings.phone}
                </Typography>
              )}
            </Box>
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: { xs: 2, sm: 3 } }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: { xs: 2, sm: 3 } }}>
              <TextField fullWidth required name="name" label={site.contact.nameLabel} variant="outlined" />
              <TextField fullWidth required name="email" label={site.contact.formEmailLabel} variant="outlined" type="email" />
            </Box>
            <TextField fullWidth required name="message" label={site.contact.messageLabel} variant="outlined" multiline rows={6} />
            <Button type="submit" variant="contained" size="large" sx={{ justifySelf: { xs: 'stretch', sm: 'start' }, px: 4, py: 1.5 }}>
              {site.contact.submitLabel}
            </Button>
          </Box>
          </Box>
          </Reveal>
        </Box>
      </Box>

      <Box component="footer" sx={{ py: { xs: 3, md: 4 }, backgroundColor: '#20302F', color: '#FFFFFF' }}>
        <Box
          sx={{
            maxWidth: 1060,
            mx: 'auto',
            px: { xs: 2, sm: 3 },
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{settings.therapist_name}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)' }}>
              {site.footer.description.replace('{location}', settings.location)}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
            <Typography component="a" href={`mailto:${settings.email}`} sx={{ color: '#FFFFFF', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              {settings.email}
            </Typography>
            {settings.phone && (
              <Typography component="a" href={`tel:${settings.phone.replace(/\s/g, '')}`} sx={{ color: '#FFFFFF', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                {settings.phone}
              </Typography>
            )}
          </Box>
        </Box>
        <Box sx={{ maxWidth: 1060, mx: 'auto', px: { xs: 2, sm: 3 }, mt: 2, pt: 1.5, borderTop: '1px solid rgba(255,255,255,0.16)' }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.58)' }}>
            © {new Date().getFullYear()} {settings.therapist_name}. {site.footer.closingNote}
          </Typography>
        </Box>
      </Box>



    </Layout>
  );
}
