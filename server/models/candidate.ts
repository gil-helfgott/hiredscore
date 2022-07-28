import moment from "moment";

export class Candidate {
    workGap?: WorkGap[];

    constructor(public fullName: string, public workExperience: WorkExperience[]) {
        // const previousEndDate =
        // const g = moment(workExperience[0].startDate, 'MMM/DD/YYYY');
        // var a = 3;
    }

    createWorkGaps(): WorkGap[] {
        if (!this.workExperience.length) {
            return [];
        }
        let previousStartDate = this.workExperience[0].startDate;
        for (let i = 1; i < this.workExperience.length; i++) {
            if (this.workExperience) {

            }
        }

        return [];
    }
}

export class WorkGap {
    constructor(startDate: Date, endDate: Date) {
    }
}

export class WorkExperience {
    constructor(public title: string, public startDate: string, public endDate?: string) {
    }
}