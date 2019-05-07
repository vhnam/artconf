import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import './Carousel.module.css';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };
  }

  render() {
    const {children, slide, changeSlide} = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex, newIndex) => {
        if (changeSlide) {
          changeSlide(newIndex);
        }

        this.setState({
          current: newIndex,
        });
      },
    };

    if (slide !== this.state.current && this.slider) {
      this.slider.slickGoTo(slide);
    }

    return (
      <Slider ref={(slider) => (this.slider = slider)} {...settings}>
        {children}
      </Slider>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  slide: PropTypes.number.isRequired,
  changeSlide: PropTypes.func.isRequired,
};

export default Carousel;
