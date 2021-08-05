import styled from 'styled-components';
import bannerImg from '../images/banner.png';

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${bannerImg});
  background-position: center center;
  background-size: cover;
`;