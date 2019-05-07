import {useState} from 'react';
import PropTypes from 'prop-types';

const CarouselController = ({children}) => {
  const [slide, setSlide] = useState(0);

  return children(slide, setSlide);
};

CarouselController.propTypes = {
  children: PropTypes.func.isRequired,
};

export default CarouselController;
