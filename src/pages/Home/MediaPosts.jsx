import { Center, Grid, VStack, Text } from "@chakra-ui/react";
import React from "react";
import MediaPost from "./MediaGridPost";

export default function MediaPosts() {
  return (
    <Center>
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(1, 1fr)"
          gap={6}
          margin={"50px"}
        >
          <MediaPost
            title={
              "Poznan Warszawa wspolna sprawa Poznan Warszawa wspolna sprawa Poznan Warszawa wspolna sprawa"
            }
            description={
              "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            }
            image={
              "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/007-Marcin-Rurarz-Fotografia-WB23.jpg"
            }
            date={"01-01-2024"}
            link={""}
            source={"Radio Poznan"}
            category={"Mówią o nas"}
          />
          <MediaPost
            title={"Poznan Warszawa wspolna sprawa"}
            description={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
            image={
              "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/007-Marcin-Rurarz-Fotografia-WB23.jpg"
            }
            date={"01-01-2024"}
            link={""}
            source={"Radio Poznan"}
            category={"Piszą o nas"}
          />
          <MediaPost
            title={"Poznan Warszawa wspolna sprawa"}
            description={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
            image={
              "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/007-Marcin-Rurarz-Fotografia-WB23.jpg"
            }
            date={"01-01-2024"}
            link={""}
            source={"Radio Poznan"}
            category={"Pokazują nas"}
          />
        </Grid>
    </Center>
  );
}
