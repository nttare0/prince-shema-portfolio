import { Url } from "next/dist/shared/lib/router/router";
import type { StaticImageData } from "next/image";

export interface WorkExperience {
    logo: string | StaticImageData,
    link: Url,
    post: string,
    company: string,
    responsabilites: string[]
}
