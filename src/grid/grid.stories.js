import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Grid from './index';

const stories = storiesOf('Grid', module);

stories.addDecorator(withKnobs);

const root = {
  marginBottom: '20px'
};

const grid = {
  backgroundColor: '#FFC433'
};

const simple = {
  backgroundColor: '#335EFF',
  width: '100%',
  height: '50px'
};

stories.add('One Grid', () => (
  <div>
    <div style={root}>
      <Grid spacing={select('Spacing', [0, 8, 16, 24, 40], 16)}>
        <div
          size={select(
            'Size',
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            12
          )}
        >
          dynamic size={select(
            'Size',
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            12
          )}
        </div>
        <div size={6}>
          size=6
        </div>
        <div size={6}>
          size=6
        </div>
        <div size={3}>
          size=3
        </div>
        <div size={3}>
          size=3
        </div>
        <div size={3}>
          size=3
        </div>
        <div size={3}>
          size=3
        </div>
        <div size={11}>
          size=11
        </div>
        <div size={4}>
          size=4
        </div>
      </Grid>
    </div>
  </div>
));

stories.add('Nested Grids', () => (
  <div style={grid}>
    <Grid spacing={select('Spacing', [0, 8, 16, 24, 40], 16)}>
      <Grid spacing={select('Spacing', [0, 8, 16, 24, 40], 16)} size={8}>
        <div style={simple} size={3}>
          Grid 1 - Size 3
        </div>
        <div style={simple} size={3}>
          Grid 1 - Size 3
        </div>
        <div style={simple} size={6}>
          Grid 1 - Size 6
        </div>
      </Grid>
      <Grid spacing={select('Spacing', [0, 8, 16, 24, 40], 16)} size={4}>
        <div style={simple} size={6}>
          Grid 2 - Size 6
        </div>
        <div style={simple} size={6}>
          Grid 2 - Size 6
        </div>
        <div style={simple} size={6}>
          Grid 2 - Size 6
        </div>
        <div style={simple} size={6}>
          Grid 2 - Size 6
        </div>
      </Grid>
    </Grid>
  </div>
));
