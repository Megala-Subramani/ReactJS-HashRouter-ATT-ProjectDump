import httpApi from "../config/http-common";

export const getrecordsDetialsByRecordId = async (id: number) => {
    const response = await httpApi.get<Array<IDigitalRecordsDetails>>(`getDigitalRecordsByRecordId/${id}`).then(res=>res.data);
    return response;
}