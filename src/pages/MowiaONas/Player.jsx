import React from 'react';
import { useTheme } from '@emotion/react';
import AudioPlayer from 'react-h5-audio-player';
import { Card, Text, Spacer, HStack } from "@chakra-ui/react";
import 'react-h5-audio-player/lib/styles.css';
import {css} from '@emotion/react';


export default function Player({title, description, date, radioName, link}) {
    const theme = useTheme();
  const playerStyles = css`
    .rhap_button-clear {
      fill: ${theme.colors.blue[400]};
    }

    .rhap_progress-filled {
      background: ${theme.colors.blue[400]};
    }

    .rhap_progress-indicator {
      background: ${theme.colors.blue[400]};
    }
  `;

  return (
    <Card p={50} mb={'30px'} css={playerStyles}>  
        <Text fontSize={'2xl'}>{title}</Text>
        <Text mb={'30px'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quam, enim nisi obcaecati natus eum ad aliquid pariatur nemo hic praesentium, unde corrupti possimus a, incidunt iste eligendi illo sit?</Text>
        <AudioPlayer 
        src={link}
        onPlay={e => console.log("onPlay")}
        // other props here
    />
        <Spacer />
        <HStack mt={30}>
          <Text fontSize={'1xl'}>{date}</Text>
          <Spacer />
            <Text fontSize={'1xl'}>{radioName}</Text>
        </HStack>
      </Card>
    );
};
