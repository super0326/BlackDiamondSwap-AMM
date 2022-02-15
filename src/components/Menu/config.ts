import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://dev.jbms-tech.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://dev.jbms-tech.com/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://dev.jbms-tech.com/pools'
  },
  // {
  //   label: 'Leveraged farming',
  //   icon: 'PoolIcon',
  //   href: 'https://dev.jbms-tech.com/comingsoon',
  // },
  // {
  //   label: 'Jungles',
  //   icon: 'PoolIcon',
  //   href: 'https://dev.jbms-tech.com/jungles',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://dev.jbms-tech.com/lottery'
  // },
  // {
  //   label: 'Referral',
  //   icon: 'GroupsIcon',
  //   href: 'https://dev.jbms-tech.com/referral',
  // },
  {
    label: 'Price Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/',
      },
      {
        label: 'BoggedFinance',
        href: 'https://charts.bogged.finance/',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'NftIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/',
      },
      {
        label: 'LiveCoinWatch',
        href: 'https://www.livecoinwatch.com/',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com',
      },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/',
      },
      {
        label: 'Voting',
        href: 'https://dev.jbms-tech.com/comingsoon',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
