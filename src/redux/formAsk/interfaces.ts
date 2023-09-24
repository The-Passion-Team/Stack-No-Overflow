import { Status } from "~/utils"

export interface FormAskState {
    title: {
        status: Status
        current: boolean
        data: string | null
    }
    detail: {
        status: Status
        current: boolean
        data: string | null
    }
    try: {
        status: Status
        current: boolean
        data: string | null
    }
    tags: {
        status: Status
        current: boolean
        data: string[] | null
    }
}

export interface CreateQuestionPayload {
	title: string;
	detail: any;
    try: any;
    tags: any;
}
