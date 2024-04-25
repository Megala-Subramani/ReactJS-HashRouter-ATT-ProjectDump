import React from "react";
import { createStyles, Grid, Card, Text, Group, Menu, ActionIcon, rem } from "@mantine/core";
import Area from "../components/charts/Area";
import { IconDots, IconEdit, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";
import { StatsGrid } from "./statswidgets";
import USMap from "../components/charts/GeoChartSiteWIse";
import USMapDataMaps from "../components/charts/GeoChartsDataMaps";
import USMapDataMap from "../components/charts/GeoChartsDataMaps";
import USPageMap from "../components/charts/GeoChartsDataMaps";

type USMapData = {
  id: string;
  properties: {
    name:string;
    value: number;
  };
};

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      // theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      // boxShadow: theme.colorScheme === "dark" ? "1px 1px 1px blue" : "1px 1px 1px grey",
  },
}));
export default function Dashboard() {
  const { classes, theme } = useStyles();
  const stateData = {
    CA: 50,
    TX: 30,
    NY: 40,
    // Add more state data as needed
  };

  const sampleData: USMapData[] = [
    {
      id: 'AL',
      properties: {
        name: 'Alabama',
        value: 4.888, // Example value for Alabama
      },
    },
    {
      id: 'AK',
      properties: {
        name: 'Alaska',
        value: 733, // Example value for Alaska
      },
    },
    // ... Add data for other US states
  ];


  return (
        <Grid grow gutter={10} >
          <Grid.Col >
          <StatsGrid />
          </Grid.Col>
    <Grid.Col span={6}>
        <Card withBorder shadow="md" p="xs" radius="md" className={classes.card}>
        <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon>
                <IconDots size="1rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconEdit size={rem(14)} />}>Edit widget configuration</Menu.Item>
              <Menu.Item icon={<IconTrash size={rem(14)} />} color="red">Remove</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>
          {/* <Area />   */}
          <USMap />
        </Card>
      </Grid.Col>
      <Grid.Col span={6}>
        <Card withBorder shadow="md" p="xs" radius="md" className={classes.card}>
          <Area />
          {/* <USMapDataMap data={stateData} /> */}
          <USPageMap />
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card withBorder shadow="md" p="xs" radius="md" className={classes.card}>
          <Text size="md" weight={700} align="center">
            widget sample!
          </Text>
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card withBorder shadow="md" p="xs" radius="md" className={classes.card}>
          <Area />
        </Card>
      </Grid.Col>
      <Grid.Col span={3}>
        <Card withBorder shadow="md" p="xs" radius="md" className={classes.card}>
          <Area />
        </Card>
      </Grid.Col>
    </Grid>
  );
}
