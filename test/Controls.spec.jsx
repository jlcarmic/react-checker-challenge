import expect from 'expect';
import expectReactShallow from 'expect-react-shallow';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { Controls } from '../lib/Controls';
import { Button, FormControl } from 'react-bootstrap';

describe('Controls', () => {
  it('should render with controls with all the buttons and form field', () => {
    expectReactShallow(<Controls />).to.contain(<Button bsStyle='success'>Play</Button>);
    expectReactShallow(<Controls />).to.contain(<Button bsStyle='danger'>Stop</Button>);
    expectReactShallow(<Controls />).to.contain(<Button bsStyle='primary'>Reset</Button>);
    expectReactShallow(<Controls />).to.contain(<FormControl />);
    expectReactShallow(<Controls />).to.contain(<Button>Set Size</Button>);
  });
});
