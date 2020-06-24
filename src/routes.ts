import Home from '@/pages/Home'
import About from '@/pages/About'
import Login from '@/pages/Login'
import NotFound from '@/components/NotFound'
import Ref from '@/pages/Ref'
import ForwardRef from '@/pages/ForwardRef'
import Context from '@/pages/Context'
import Children from '@/pages/Children'
import UseState from '@/pages/UseState'
import UseEffect from '@/pages/UseEffect'
import UseRef from '@/pages/UseRef'
import UseMemo from '@/pages/UseMemo'
import UseCallback from '@/pages/UseCallback'

const routes = [{
  path: '/about',
  component: About
}, {
  path: '/login',
  component: Login
}, {
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/ref',
  exact: true,
  component: Ref
}, {
  path: '/forwardRef',
  exact: true,
  component: ForwardRef
}, {
  path: '/context',
  exact: true,
  component: Context
}, {
  path: '/children',
  exact: true,
  component: Children
}, {
  path: '/useState',
  exact: true,
  component: UseState
}, {
  path: '/useEffect',
  exact: true,
  component: UseEffect
}, {
  path: '/useRef',
  exact: true,
  component: UseRef
}, {
  path: '/useMemo',
  exact: true,
  component: UseMemo
}, {
  path: '/useCallback',
  exact: true,
  component: UseCallback
},
{component: NotFound}]

export default routes