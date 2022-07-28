import get from "axios";

export async function getCandidatesFromApi(): Promise<{
    contact_info: {
        name: {
            formatted_name: string
        }
    },
    experience: {
        title: string,
        start_date: string,
        end_date?: string
    }[]
}[]> {
    const res = await get('https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122');
    return res.data;
}