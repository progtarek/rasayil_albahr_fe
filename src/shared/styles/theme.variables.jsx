import styled from 'styled-components';

export const PRIMARY = '#40D2DC';
export const PRIMARY_LIGHT = '#66DBE3';
export const PRIMARY_DARK = '#068EA9';
export const PRIMARY_SEMI_DARK = '#2FBFD1';
export const SECONDARY = '#3D373D';
export const GRAY = '#ced4da';
export const BACKGROUND_LIGHT = '#F9FBFB';
export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
