import React from 'react';
import { description } from 'wix-storybook-utils/Sections';
import { storySettings } from './storySettings';
import { Layout, Cell } from '../../src/Layout';
import classNames from 'classnames';
import styles from './colorsStory.scss';
import colors from '../../src/colors.scss';
import Text from '../../src/Text';
import Box from '../../src/Box';

const empty = {};
const lightText = true;
const darkBorder = true;

function rgba2hex(orig) {
  let a,
    rgb = orig
      .replace(/\s/g, '')
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || '').trim(),
    hex = rgb
      ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
        (rgb[2] | (1 << 8)).toString(16).slice(1) +
        (rgb[3] | (1 << 8)).toString(16).slice(1)
      : orig;

  if (alpha !== '') {
    a = alpha;
  } else {
    a = 'FF';
  }
  // multiply before convert to HEX
  a = ((a * 255) | (1 << 8)).toString(16).slice(1);
  hex = hex + a;

  return '#' + hex.toUpperCase();
}

const colorsTable = [
  {
    name: 'General',
    units: [
      empty,
      empty,
      {
        name: 'D10',
        description: 'Text',
        lightText,
      },
      {
        name: 'D20',
        description: 'Secondary Text',
        lightText,
      },
      {
        name: 'D30',
      },
      {
        name: 'D40',
        description: 'Placeholder Text',
        lightText,
      },
      {
        name: 'D50',
        darkBorder,
      },
      {
        name: 'D55',
        darkBorder,
      },
      {
        name: 'D60',
        description: 'Divider',
        darkBorder,
      },
      {
        name: 'D70',
        description: 'Background',
        darkBorder,
      },
      {
        name: 'D80',
        description: 'card',
        darkBorder,
      },
    ],
  },
  {
    name: 'Primary',
    units: [
      {
        name: 'B00',
        description: 'Loader, ProgressBar',
        lightText,
      },
      {
        name: 'B05',
      },
      {
        name: 'B10',
        description: 'Button, Text Link (Default; Click)',
        lightText,
      },
      {
        name: 'B20',
        description: 'Button (Hover), Notification Bar',
      },
      {
        name: 'B30',
        description: 'Tag (Hover), Floating Notification Border',
      },
      {
        name: 'B40',
        description: 'Tag(Default), Badge',
      },
      {
        name: 'B50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'B60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Destructive',
    units: [
      {
        name: 'R00',
      },
      {
        name: 'R05',
      },
      {
        name: 'R10',
        description: 'Button, Text Link (Default; Click)',
        lightText,
      },
      {
        name: 'R20',
        description: 'Button (Hover), Notification Bar',
      },
      {
        name: 'R30',
        description: 'Tag (Hover), Floating Notification Border',
      },
      {
        name: 'R40',
        description: 'Tag(Default), Badge',
      },
      {
        name: 'R50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'R60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Premium',
    units: [
      {
        name: 'P00',
      },
      empty,
      {
        name: 'P10',
        description: 'Button, Text Link (Default; Click)',
        lightText,
      },
      {
        name: 'P20',
        description: 'Button (Hover), Notification Bar',
      },
      {
        name: 'P30',
        description: 'Notification Border',
      },
      {
        name: 'P40',
        description: 'Badge',
      },
      {
        name: 'P50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'P60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Success',
    units: [
      {
        name: 'G00',
      },
      {
        name: 'G05',
      },
      {
        name: 'G10',
        description: 'Badge',
        lightText,
      },
      {
        name: 'G20',
        description: 'Notification Bar',
      },
      {
        name: 'G30',
        description: 'Notification Border',
      },
      {
        name: 'G40',
        description: 'Badge',
      },
      {
        name: 'G50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'G60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Warning',
    units: [
      {
        name: 'Y00',
      },
      {
        name: 'Y05',
      },
      {
        name: 'Y10',
        description: 'Notification Bar, Badge',
        lightText,
      },
      {
        name: 'Y20',
      },
      {
        name: 'Y30',
        description: 'Tag (Hover), Floating Notification Border',
      },
      {
        name: 'Y40',
        description: 'Tag(Default), Badge',
      },
      {
        name: 'Y50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'Y60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Urgent',
    units: [
      {
        name: 'O00',
      },
      empty,
      {
        name: 'O10',
        description: 'Badge',
        lightText,
      },
      {
        name: 'O20',
      },
    ],
  },
  {
    name: 'Opacity',
    units: [
      empty,
      empty,
      empty,
      empty,
      empty,
      empty,
      {
        name: 'D10-05',
        darkBorder,
        rgba2hex,
      },
      {
        name: 'D10-10',
        darkBorder,
        rgba2hex,
      },
      {
        name: 'D10-20',
        darkBorder,
        rgba2hex,
      },
      {
        name: 'D10-30',
        darkBorder,
        rgba2hex,
      },
    ],
  },
  {
    name: 'Misc',
    units: [
      {
        name: 'F00',
      },
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    description({
      title: '< Some Description >',
    }),

    <Layout cols={9}>
      {colorsTable.map((category, c_index) => (
        <Cell key={c_index} span={1}>
          <Box margin={1}>
            <Text>{category.name}</Text>
          </Box>
          <Layout>
            {category.units.map((unit, u_index) => (
              <Cell key={u_index}>
                <Box height="140px" direction="vertical">
                  <div
                    className={classNames(styles.cell, {
                      [styles.darkBorder]: unit.darkBorder,
                    })}
                    style={{
                      backgroundColor: colors[unit.name],
                      borderColor: !unit.darkBorder && colors[unit.name],
                    }}
                  >
                    <Text light={unit.lightText} size="small">
                      {unit.description}
                    </Text>
                  </div>
                  <Box marginTop={1}>
                    <Text size="small">{unit.name}</Text>
                  </Box>
                  <Box>
                    {unit.rgba2hex && (
                      <Text size="small">{rgba2hex(colors[unit.name])}</Text>
                    )}
                  </Box>
                  <Box>
                    <Text size="small">{colors[unit.name]}</Text>
                  </Box>
                </Box>
              </Cell>
            ))}
          </Layout>
        </Cell>
      ))}
    </Layout>,
  ],
};
