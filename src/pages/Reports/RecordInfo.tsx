import { Anchor, Breadcrumbs, Button, Group, Paper, createStyles, Text, Tabs, Table } from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getDigitalRecordById } from "../../services/DigitalRecords.service";
import { getrecordsDetialsByRecordId } from "../../services/DigitalRecordsDetails.services";


const useStyles = createStyles((theme)=> ({
    newButtonForWidget : {
        height: "1.5rem",
        border: "1px solid #b6ebfd",
    }
}));

export default function RecordInfo(paramData){

    const recordQuery = useQuery({
        queryKey:["recordData",paramData.recordId ], 
        queryFn: () => getDigitalRecordById(paramData.recordId),
        retry: 1,
    })

    if(recordQuery.status==="loading"){
        return <h6>Loading...</h6>;
    }

    if(recordQuery.status==="error"){
        return <h6>{JSON.stringify(recordQuery.error)}</h6>;
    }

    const recordDetailsQuery = useQuery({
        queryKey:["recordDetailsData",paramData.recordId ], 
        queryFn: () => getrecordsDetialsByRecordId(paramData.recordId),
        retry: 1,
    })

    if(recordDetailsQuery.status==="loading"){
        return <h6>Loading...</h6>;
    }

    if(recordDetailsQuery.status==="error"){
        return <h6>{JSON.stringify(recordDetailsQuery.error)}</h6>;
    }


    const rows = recordDetailsQuery.data.map((res)=>{
        <tr key={res.id}>
            <td>{res.id}</td>
            <td>{res.digitalRecordsId}</td>
            <td>{res.comments}</td>
        </tr>
    });
    
return (
    <>
    <Group>
        <Text>Record ID : {recordQuery.data.id}</Text>
        <Text>Record Name : {recordQuery.data.recordName}</Text>
        <Text>Record Name : {recordQuery.data.createdBy}</Text>
    </Group>

    <Table highlightOnHover withBorder withColumnBorders pt={"sm"}>
        <thead>
        <th>id</th>
        <th>Record id</th>
        <th>Comments</th>
        </thead>
        <tbody>
            {/* {rows} */}
        </tbody>
    </Table>

    </>
);
}