import React from 'react';

import Typography, {
  TypoVariants,
  TypoWeight,
} from '../../components/Typography';
import Carousel from '../../components/Carousel';
import CarouselController from '../../components/CarouselController';

import Speaker from './components/Speaker';

import styles from './Speakers.module.css';
import NavigationItem from './components/NavigationItem/NavigationItem';

const speakers = [
  {
    name: 'Jonathan Ive',
    work: 'Chief Design Officer (CDO) of Apple',
    description:
      'Sir Jonathan Paul "Jony" Ive, KBE, HonFREng, RDI is a British industrial designer who is currently serving as the Chief Design Officer (CDO) of Apple and Chancellor of the Royal College of Art in London. He joined Apple in 1992. Following ten years of service, he was promoted to Senior Vice President of design, overseeing the design of the iPod, iPhone, iPad, MacBook, and parts of Apple\'s user interface, iOS.',
    avatar:
      'https://casabrutus.com/wp-content/uploads/2018/10/1010iphone2_702.jpg',
  },
  {
    name: 'Tanner Christensen',
    work: 'Product Designer @Lyft',
    description:
      'Tanner Christensen is Digital Product Designer at Lyft, also a published author, developer, design advisor, and semi-entrepreneur. Previously I worked as Product Design Lead at Atlassian, and before that, I worked as a Product Designer at Facebook.',
    avatar:
      'https://miro.medium.com/fit/c/240/240/1*jVHNa07J6ONjXAlz9Bgsug@2x.jpeg',
  },
  {
    name: 'Dieter Rams',
    work: 'German industrial designer',
    description:
      'Dieter Rams is a German industrial designer and retired academic closely associated with the consumer products company Braun and the functionalist school of industrial design.',
    avatar:
      'https://rogervand.files.wordpress.com/2016/11/4303876035_78b26b28b4.jpg',
  },
  {
    name: 'Jakob Nielsen',
    work: 'Computer scientist',
    description:
      'Jakob Nielsen is a Danish web usability consultant. He holds a Ph.D. in human–computer interaction from the Technical University of Denmark in Copenhagen.',
    avatar:
      'https://media.nngroup.com/media/people/photos/jakob-nielsen_cropped.jpg.400x400_q95_autocrop_crop_upscale.jpg',
  },
  {
    name: 'Luke Wroblewski',
    work: 'Product Director at Google',
    description:
      'LukeW is an internationally recognized digital product leader who has designed and built software used by billions of people worldwide.',
    avatar:
      'http://thewebahead.net/sites/default/files/styles/circle_200/public/Luke%20Wroblewski_0.jpg',
  },
];

const Speakers = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Typography
          className={styles.heading}
          variant={TypoVariants.h1}
          weight={TypoWeight.semibold}
        >
          Our <br /> speakers
        </Typography>
        <CarouselController>
          {(slide, setSlide) => (
            <div className="row">
              <div className="col-xl-2">
                <ul className={styles.list}>
                  {speakers.map((speaker, index) => (
                    <NavigationItem
                      key={speaker.name}
                      speaker={speaker}
                      active={slide === index}
                      index={index}
                      onChangeIndex={setSlide}
                    />
                  ))}
                </ul>
              </div>
              <div className="col-xl-2">
                <Carousel slide={slide} changeSlide={setSlide}>
                  {speakers.map((speaker) => (
                    <Speaker key={speaker.name} speaker={speaker} />
                  ))}
                </Carousel>
              </div>
            </div>
          )}
        </CarouselController>
      </div>
    </div>
  );
};

export default Speakers;
