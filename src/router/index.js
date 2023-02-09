import configRoutes from '~/config/routes';
// Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public router
const publicRouter = [
    { path: configRoutes.home, component: Home },
    { path: configRoutes.following, component: Following },
    { path: configRoutes.profile, component: Profile },
    { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
    { path: configRoutes.search, component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
