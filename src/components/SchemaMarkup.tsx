import { useEffect } from 'react';
import { SERVICES_DATA, FAQ_DATA } from '../data';

export default function SchemaMarkup() {
  useEffect(() => {
    // 1. Local Business Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'AccountingService',
      'name': 'GUPTA ADARSH & CO.',
      'image': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      '@id': 'https://ais-pre-c6eckuqcibpvwspz7i3g2m-893669360321.asia-east1.run.app/#localbusiness',
      'url': window.location.origin,
      'telephone': '+918319571654',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Krishna Kunj, 2113 Gandhi Road, Behind Kirar Bhawan, Thatipur',
        'addressLocality': 'Gwalior',
        'addressRegion': 'Madhya Pradesh',
        'postalCode': '474011',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '26.2163',
        'longitude': '78.2037'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        'opens': '09:00',
        'closes': '20:00'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '200'
      }
    };

    // 2. Services Schema
    const servicesSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Chartered Accountant Services - GUPTA ADARSH & CO.',
      'itemListElement': SERVICES_DATA.map((service, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Service',
          'name': service.name,
          'description': service.description,
          'provider': {
            '@type': 'AccountingService',
            'name': 'GUPTA ADARSH & CO.'
          }
        }
      }))
    };

    // 3. FAQ Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQ_DATA.slice(0, 10).map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    // 4. Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': `${window.location.origin}#services`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Tax Planning',
          'item': `${window.location.origin}#tax-calculator`
        }
      ]
    };

    // Function to append script to head
    const injectJSONLD = (id: string, data: object) => {
      let script = document.getElementById(id);
      if (script) {
        script.remove();
      }
      script = document.createElement('script');
      script.id = id;
      script.setAttribute('type', 'application/ld+json');
      script.innerHTML = JSON.stringify(data);
      document.head.appendChild(script);
    };

    injectJSONLD('json-ld-local-business', localBusinessSchema);
    injectJSONLD('json-ld-services', servicesSchema);
    injectJSONLD('json-ld-faq', faqSchema);
    injectJSONLD('json-ld-breadcrumb', breadcrumbSchema);

    return () => {
      document.getElementById('json-ld-local-business')?.remove();
      document.getElementById('json-ld-services')?.remove();
      document.getElementById('json-ld-faq')?.remove();
      document.getElementById('json-ld-breadcrumb')?.remove();
    };
  }, []);

  return null;
}
