import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn({})),
    useDispatch: () => jest.fn()
}));