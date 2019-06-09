import Booking from '../client/components/Booking.jsx';
import Button from '../client/components/AirbnbButton.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Booking /> );
});

describe('<Booking /> rendering', () => {
  it('should render one <div>', () => {
    expect(wrapper.children('div')).toHaveLength(1);
  });

  it('should render one <Button>', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});