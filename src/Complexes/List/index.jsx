import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Card from './Card';
import background from './background.png';

const Complexes = styled.main`
  padding-bottom: 3rem;
  background-image: url(${background});
  background-color: #eaebf0;
  background-size: 20px 10px;
  background-repeat: repeat;
`;

export default () =>
  (<Complexes>
    <Banner />
    <Card id="" location="South Beach, San Francisco" name="764 Metropolitan Avenue">
      The Lewis Steel Building is a masterful industrial conversion located in the heart of
      Williamsburg. Located at 76 North 4th Street, the former 1930&apos;s steel factory has been
      transformed into 83 individually unique and luxury loft apartments.
    </Card>
    <Card id="" location="Midtown East, Manhattan" name="100 East 53rd Street">
      One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern
      residences in Midtown Manhattan&apos;s Cultural District. The 94 residences ranging from
      alcove lofts to four bedrooms within the 63-story tower are generously proportioned.
    </Card>
    <Card id="" location="Nolita, Manhattan" name="152 Elizabeth">
      152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by
      Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets
      in Nolita, the 32,000-square-foot building will stand as a profound architectural statement
      and embrace the industrial character of the neighborhood.
    </Card>
  </Complexes>);
