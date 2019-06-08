import Booking from '../client/components/Booking.jsx';

describe('<Booking /> rendering', () => {
  it('should render one <h1>', () => {
      let wrapper = shallow(<Booking />);
      expect(wrapper.children('div')).toHaveLength(1);
  });
});