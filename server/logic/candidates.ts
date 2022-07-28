import {getCandidatesFromApi} from "../dal/candidates";
import {Candidate, WorkExperience} from "../models/candidate";

export async function getCandidates() {
    const rawCandidates = await getCandidatesFromApi();

    return rawCandidates.map(candidate => {
        return new Candidate(candidate.contact_info.name.formatted_name, candidate.experience.map(exp => {
            return new WorkExperience(exp.title, exp.start_date, exp.end_date);
        }));
    });
}