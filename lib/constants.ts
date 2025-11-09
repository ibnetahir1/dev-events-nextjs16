export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    image: '/images/event1.png',
    title: 'React Summit 2026',
    slug: 'react-summit-2026',
    location: 'Amsterdam, NL',
    date: 'March 10-12, 2026',
    time: '09:00 - 18:00',
  },
  {
    image: '/images/event2.png',
    title: 'JSConf EU 2026',
    slug: 'jsconf-eu-2026',
    location: 'Berlin, DE',
    date: 'April 22-24, 2026',
    time: '10:00 - 17:30',
  },
  {
    image: '/images/event3.png',
    title: 'Next.js Conf 2026',
    slug: 'nextjs-conf-2026',
    location: 'Online & San Francisco, CA',
    date: 'May 5, 2026',
    time: '11:00 - 19:00 PT',
  },
  {
    image: '/images/event4.png',
    title: 'Google I/O 2026',
    slug: 'google-io-2026',
    location: 'Mountain View, CA',
    date: 'May 20-22, 2026',
    time: '09:00 - 17:00',
  },
  {
    image: '/images/event5.png',
    title: 'AWS re:Invent 2025',
    slug: 'aws-reinvent-2025',
    location: 'Las Vegas, NV',
    date: 'Nov 25-29, 2025',
    time: '08:30 - 19:00',
  },
  {
    image: '/images/event6.png',
    title: 'PyCon US 2026',
    slug: 'pycon-us-2026',
    location: 'Pittsburgh, PA',
    date: 'April 14-22, 2026',
    time: '09:00 - 18:00',
  },
]