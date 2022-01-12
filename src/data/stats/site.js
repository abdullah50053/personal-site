import dayjs from 'dayjs';

/* Keys match keys returned by the github api. */
const data = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/abdullah50053/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
