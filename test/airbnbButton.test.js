import AirbnbButton from '../client/components/AirbnbButton.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AirbnbButton /> );
});

describe('<AirbnbButton /> rendering', () => {
  it('should render one <button>', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});