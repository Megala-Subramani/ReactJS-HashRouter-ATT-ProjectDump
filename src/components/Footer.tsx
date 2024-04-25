import React from "react";
import { Container, Group, Footer as MantineFooter, Text } from "@mantine/core";

export default function Footer() {
  return (
    <MantineFooter height={60} p="md">
      {/* <Container> */}
      <Text color="dimmed" size="sm">
        © 2023 AT&T softtest. All rights reserved.
      </Text>

      {/* <Group spacing={0} className={classes.social} position="right" noWrap></Group> */}
      {/* </Container> */}
    </MantineFooter>
  );
}
