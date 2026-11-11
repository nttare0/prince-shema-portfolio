import { Url } from "next/dist/shared/lib/router/router";

export interface WorkExperience {
    logo: string,
    link: Url,
    post: string,
    company: string,
    responsabilites: string[]
}