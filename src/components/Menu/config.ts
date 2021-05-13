import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://cowswap.finance/farms',
    status: {
      color: "failure", text: "LIVE"
    }
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://cowswap.finance/pools',
  },
  // {
  //   label: 'Prediction',
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  //   status: {
  //     text: 'BETA',
  //     color: 'warning',
  //   },
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/',
    status: {
      text: 'COMMING',
      color: 'warning',
    },
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  {
    label: 'NFT',
    icon: 'TeamBattleIcon',
    href: '/',
    status: {
      text: 'COMMING',
      color: 'warning',
    },
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    href: '/',
    // items: [
    //   {
    //     label: 'Leaderboard',
    //     href: '/teams',
    //   },
    //   {
    //     label: 'Task Center',
    //     href: '/profile/tasks',
    //   },
    //   {
    //     label: 'Your Profile',
    //     href: '/profile',
    //   },
    // ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: '/',
    // items: [
    //   {
    //     label: 'Overview',
    //     href: 'https://cowswap.info',
    //   },
    //   {
    //     label: 'Tokens',
    //     href: 'https://cowswap.info/tokens',
    //   },
    //   {
    //     label: 'Pairs',
    //     href: 'https://cowswap.info/pairs',
    //   },
    //   {
    //     label: 'Accounts',
    //     href: 'https://cowswap.info/accounts',
    //   },
    // ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/',
    status: {
      text: 'COMMING',
      color: 'warning',
    },
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    href: '/',
    // items: [
    //   {
    //     label: 'Contact',
    //     href: 'https://docs.cowswap.finance/contact-us',
    //   },
    //   {
    //     label: 'Voting',
    //     href: 'https://voting.cowswap.finance',
    //   },
    //   {
    //     label: 'Github',
    //     href: 'https://github.com/cowswap',
    //   },
    //   {
    //     label: 'Docs',
    //     href: 'https://docs.cowswap.finance',
    //   },
    //   {
    //     label: 'Blog',
    //     href: 'https://cowswap.medium.com',
    //   },
    // ],
  },
]

export default config
