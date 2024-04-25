import { Anchor, Breadcrumbs, Button, Group, Paper, createStyles, Text, Tabs, Card } from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons-react";
import React from "react";
import RecordInfo from "./RecordInfo";
import dashcss from "./../../assets/styles/dashboardDesign.module.css";


const useStyles = createStyles((theme)=> ({
    newButtonForWidget : {
        height: "1.5rem",
        border: "1px solid #b6ebfd",
    }
}));

export default function DebugWindow(){ 
    const {classes, theme } = useStyles();
    // const breadcrumItems =[
    //     {title: 'Debug window', href: '/DebugWindow' },
    // ].map((item,index) => (
    //     <Anchor bg={theme.colors.grey[0]} href={item.href} key={index}>
    //         {item.title}
    //     </Anchor>
    // ));

const recordId = 33309817;
return (
    <>
    <Card classNames={dashcss.Card}>

    <Text fz={"sm"}>Record ID: </Text>
    </Card>
    <Group position="left" mt={"-1rem"}>
        {/* <Breadcrumbs p={"xs"} fw={700} ff={"sans-serif"} fs={"italic"}>{breadcrumItems}</Breadcrumbs> */}
        <Button variant="light" size="xs" m={"1xp"}  className={classes.newButtonForWidget}>
            <Group>
                <Text fz={"sm"}>Record ID: </Text>
                <Text fz={"sm"}>{recordId}</Text>
            </Group>
        </Button>
    </Group>
    <Paper>
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="RecordDetails" icon={<IconPhoto size="0.8rem" />}>Record Details</Tabs.Tab>
        <Tabs.Tab value="RecordFiles" icon={<IconMessageCircle size="0.8rem" />}>Record Related Files</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="RecordDetails" pt="xs">
        Record Details for ID: {recordId}
        <RecordInfo recordId={recordId}/>
      </Tabs.Panel>
      <Tabs.Panel value="RecordFiles" pt="xs">
        Record FIles
      </Tabs.Panel>
      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
    </Paper>
    </>
);
}