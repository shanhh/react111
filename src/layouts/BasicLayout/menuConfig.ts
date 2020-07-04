const headerMenuConfig = []

const asideMenuConfig = [
  {
    name: 'Home',
    path: '/',
    icon: 'chart-pie'
  },
  {
    name: 'About',
    path: '/about',
    icon: 'chart-pie'
  },
  {
    name: 'Login',
    path: '/login',
    icon: 'account'
  },
  {
    name: 'Angular',
    icon: 'set',
    children: [
      {
        path: '/angular',
        name: 'router contact'
      },
      {
        path: '/angular/detail',
        name: 'router detail'
      }
    ]
  },
  {
    name: '商家平台',
    icon: 'atm',
    children: [
      {
        path: '/seller',
        name: '商家首页'
      },
      {
        path: '/seller/list',
        name: '商家列表'
      },
      {
        path: '/seller/detail',
        name: '商家详情'
      },
      {
        path: '/seller/404',
        name: '商家 404'
      }
    ]
  },
  {
    name: '小二平台',
    icon: 'account',
    children: [
      {
        path: '/waiter',
        name: '小二首页'
      },
      {
        path: '/waiter/list',
        name: '小二列表'
      },
      {
        path: '/waiter/detail',
        name: '小二详情'
      },
      {
        path: '/waiter/404',
        name: '小二 404'
      }
    ]
  },
  {
    name: '单浩辉',
    icon: 'smile',
    children: [
      {
        path: '/ref',
        name: 'ref'
      },
      {
        path: '/forwardRef',
        name: 'forwardRef'
      },
      {
        path: '/context',
        name: 'context'
      },
      {
        path: '/children',
        name: 'children'
      },
      {
        path: '/useState',
        name: 'useState'
      },
      {
        path: '/useEffect',
        name: 'useEffect'
      },
      {
        path: '/useRef',
        name: 'useRef'
      },
      {
        path: '/useMemo',
        name: 'useMemo'
      },
      {
        path: '/useCallback',
        name: 'useCallback'
      },
      {
        path: '/useReducer',
        name: 'useReducer'
      },
      {
        path: '/useContext',
        name: 'useContext'
      }

    ]
  }
]

export {headerMenuConfig, asideMenuConfig}
