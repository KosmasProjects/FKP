import React from "react";
import { useTheme } from "@emotion/react";
import AudioPlayer from "react-h5-audio-player";
import { Card, Text, Spacer, HStack, Image, Center, } from "@chakra-ui/react";
import "react-h5-audio-player/lib/styles.css";
import { css } from "@emotion/react";

export default function Player({ title, description, date, radioName, link }) {
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
    <Card p={50} mb={"30px"} css={playerStyles}>
      <Text fontSize={"2xl"} fontWeight={'bold'}>{title}</Text>
      <Text mb={"30px"}>
        {description}
      </Text>
      <Center>
        <HStack spacing={"80px"}>
      <Image mb={"20px"}  h={"250px"}  src="https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg"></Image>
      <Image mb={"20px"}  h={"250px"}  src="https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-pion_CMYK.svg"></Image>
        </HStack>
      </Center>
      <AudioPlayer
        src={link}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
      <Spacer />
      <HStack mt={30}>
        <Text fontSize={"1xl"}>{date}</Text>
        <Spacer />
        <Text fontSize={"1xl"}>{radioName}</Text>
      </HStack>
    </Card>
  );
}
