import * as axios from 'axios';

type PlumbsGetListOptions = {
    /**
     * A page number within the paginated result set.
     */
    page?: number;
    /**
     * Number of results to return per page. The maximum number of results returned per page is 1000, even if a larger value is specified.
     */
    page_size?: number;
    /**
     * Results will be limited to titles starting with this value.
     */
    starts_with_letter?: string;
};
type PlumbsPagingListResponse<T> = {
    count: number;
    next?: string;
    previous?: string;
    results: T[];
};
type PlumbsSection = {
    id: string;
    title: string;
    value: string;
};
type AuthAutoLoginResponse = {
    autologinLink: string;
};
type PlumbsAlgorithmResponse = {
    id: string;
    contentType: string;
    createdAt: Date;
    updatedAt: Date;
};
type PlumbsDxTxResponse = {
    id: string;
    contentType: string;
    title: string;
    description: string;
    status: string;
};
type PlumbsDxTxFullResponse = {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    contentType: string;
    status: string;
    classification: Array<string>;
    consensusStatement: string;
    clarification: string;
    sections: Array<PlumbsSection>;
    publicationDetails: string;
};
type PlumbsMonographResponse = {
    id: string;
    contentType: string;
    title: string;
    pronunciationNew: string;
    drugClass: Array<string>;
    commercialNames: Array<string>;
    status: string;
    aliases: Array<string>;
};
type PlumbsMonographFullResponse = {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    contentType: string;
    pronunciationNew: string;
    drugClass: Array<string>;
    species: Array<string>;
    showMonograph: boolean;
    commercialNames: Array<string>;
    status: string;
    aliases: Array<string>;
    publicationDetails: string;
    sections: Array<PlumbsSection>;
};
type PlumbsPatientGuideResponse = {
    id: string;
    title: string;
    contentType: string;
    alsoCalled: Array<string>;
    pdfUrl: string;
    status: string;
};
type PlumbsPatientGuideFullResponse = {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    contentType: string;
    alsoCalled: Array<string>;
    pdfUrl: string;
    status: string;
};
type PlumbsMedicationGuideResponse = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    otherNamesForThisMedication: string;
    /**
     * 	Link to Veterinary Medication Guide with all sections.. You must have dedicated permission to access the content.
     */
    pdfUrl: string | null;
    /**
     * 	Link to Veterinary Medication Guide without Prescription Label; No Logo; With Special Instructions. You must have dedicated permission to access the content.
     */
    pdfUrlNoLabelNoLogoInstructions: string | null;
    /**
     * Link to Veterinary Medication Guide without Prescription Label; No Logo; Without Special Instructions. You must have dedicated permission to access the content.
     */
    pdfUrlNoLabelNoLogoNoInstructions: string | null;
    /**
     * Link to Veterinary Medication Guide without Prescription Label; With Plumb’s Logo; With Special Instructions. You must have dedicated permission to access the content.
     */
    pdfUrlNoLabelLogoInstructions: string | null;
    /**
     * Link to Veterinary Medication Guide without Prescription Label; With Plumb’s Logo; Without Special Instructions. You must have dedicated permission to access the content.
     */
    pdfUrlNoLabelLogoNoInstructions: string | null;
    /**
     * The title of the medication guide.
     */
    title: string;
};
type PlumbsMedicationGuideFullResponse = PlumbsMedicationGuideResponse & {
    contentType: string;
    section: {
        description: {
            title: 'Description';
            content: string;
        };
        disposal: {
            title: 'How should I dispose of this medication if I don’t use it all?';
            content: string;
        };
        hazardous: {
            title: 'Can handling this medication be hazardous to me, my family, or other animals?';
            content: string;
        };
        howIsThisMedicationUseful: {
            title: 'How is this medication useful?';
            content: string;
        };
        howLongWithTheEffectsLast: {
            title: 'How long until I will know if this medication is working, and how long will the effects of this medication last?';
            content: string;
        };
        howShouldIStoreThisMedication: {
            title: 'How should I store this medication?';
            content: string;
        };
        howShouldThisMedicationBeGiven: {
            title: 'How should this medication be given?';
            content: string;
        };
        missDose: {
            title: 'What should I do if I miss giving a dose of this medication?';
            content: string;
        };
        otherImportantInformation: {
            title: 'What other information is important for this medication?';
            content: string;
        };
        overdoseCase: {
            title: 'If my animal gets too much of this medication (an overdose), what should I do?';
            content: string;
        };
        safelyGiven: {
            title: 'What should I tell my veterinarian to see if this medication can be safely given?';
            content: string;
        };
        sideEffects: {
            title: 'What are the side effects of this medication?';
            content: string;
        };
        whenShouldThisMedicationBeUsed: {
            title: 'When should this medication not be used or be used very carefully?';
            content: string;
        };
    };
};

declare class PlumbsClient {
    private readonly _apiKey;
    private readonly _baseUrl;
    private axios;
    /**
     * Plumbs API Client
     * @param apiKey Your Plumb's API Key
     */
    constructor(apiKey: string);
    auth(): {
        /**
         * This integration allows you to sign into Plumb's via your external program and Plumb's Api Key.
         * @param targetUrl
         */
        autologinLink: (targetUrl: string) => Promise<AuthAutoLoginResponse>;
    };
    algorithm(): {
        /**
         * Get algorithm data list with pagination.
         * @param options Optional parameters
         */
        getList: (options?: PlumbsGetListOptions) => Promise<axios.AxiosResponse<PlumbsPagingListResponse<PlumbsGetListOptions>, any>>;
        /**
         * Get algorithm data for given ID.
         * @param content_id
         */
        getById: (content_id: string) => Promise<axios.AxiosResponse<PlumbsAlgorithmResponse, any>>;
    };
    dxtx(): {
        /**
         * Get dx & tx data list with pagination.
         * @param options Optional parameters
         */
        getList: (options?: PlumbsGetListOptions) => Promise<axios.AxiosResponse<PlumbsPagingListResponse<PlumbsDxTxResponse>, any>>;
        /**
         * Get dx & tx data for given ID.
         * @param content_id
         */
        getById: (content_id: string) => Promise<axios.AxiosResponse<PlumbsDxTxFullResponse, any>>;
    };
    monograph(): {
        /**
         * Get monograph data list with pagination.
         * @param options Optional parameters
         */
        getList: (options?: PlumbsGetListOptions) => Promise<axios.AxiosResponse<PlumbsPagingListResponse<PlumbsMonographResponse>, any>>;
        /**
         * Get monograph data for given ID.
         * @param content_id
         */
        getById: (content_id: string) => Promise<axios.AxiosResponse<PlumbsMonographFullResponse, any>>;
    };
    patientGuide(): {
        /**
         * Get patient guide data list with pagination.
         * @param options Optional parameters
         */
        getList: (options?: PlumbsGetListOptions) => Promise<axios.AxiosResponse<PlumbsPagingListResponse<PlumbsPatientGuideResponse>, any>>;
        /**
         * Get patient guide data for given ID.
         * @param content_id
         */
        getById: (content_id: string) => Promise<axios.AxiosResponse<PlumbsPatientGuideFullResponse, any>>;
    };
    medicationGuide(): {
        /**
         * Get medication guide data list with pagination.
         * @param options Optional parameters
         */
        getList: (options?: PlumbsGetListOptions) => Promise<axios.AxiosResponse<PlumbsPagingListResponse<PlumbsMedicationGuideResponse>, any>>;
        /**
         * Get medication guide data for given ID.
         * @param content_id
         */
        getById: (content_id: string) => Promise<axios.AxiosResponse<PlumbsMedicationGuideFullResponse, any>>;
    };
}

export { PlumbsClient as default };
