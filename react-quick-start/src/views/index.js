import Loadable from 'react-loadable';
import Loading from '../components/loading';

//需要将对外的普通组件需要进行懒加载
const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading,
});

const Other = Loadable({
    loader: () => import('./other'),
    loading: Loading,
});

const Second = Loadable({
    loader: () => import('./other/second'),
    loading: Loading,
});

const Third = Loadable({
    loader: () => import('./other/third'),
    loading: Loading,
});

export {
    Home,
    Other,
    Second,
    Third
}
