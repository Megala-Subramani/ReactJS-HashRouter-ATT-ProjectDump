import httpApi from "../config/http-common";

export const getDigitalRecordById = async ({queryKey}) => {
    const [_,recordId] = queryKey;
    const response = await httpApi.get<IDigitalRecords>(`getDigitalRecordsById/${recordId}`).then(res=>res.data);
    return response;
}