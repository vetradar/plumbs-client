import {
    AuthAutoLoginRequest,
    AuthAutoLoginResponse,
    MonographFullRequest,
    PlumbsAlgorithmResponse,
    PlumbsDxTxFullResponse,
    PlumbsDxTxResponse,
    PlumbsGetListOptions,
    PlumbsMedicationGuideFullResponse,
    PlumbsMedicationGuideResponse,
    PlumbsMonographFullResponse,
    PlumbsMonographResponse,
    PlumbsPagingListResponse,
    PlumbsPatientGuideFullResponse,
    PlumbsPatientGuideResponse
} from "./types";

const BASE_URL = 'https://app.plumbs.com/api/v2/';
const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
};


class PlumbsClient {
    private readonly _apiKey: string
    private readonly _baseUrl: string = BASE_URL
    private readonly Fetch: (url: string, fetchOptions: any) => Promise<any>

    constructor(apiKey: string) {
        if (apiKey === undefined || apiKey === null || apiKey === '') {
            throw new Error('API Key is required')
        }

        this._apiKey = apiKey

        this.Fetch = async(url, fetchOptions) => {
            const { body: requestBody, params, ...init } = fetchOptions || {};
            const headers = new Headers({
                ...DEFAULT_HEADERS,
                Authorization: `Api-Key ${this._apiKey}`,
            });

            // URL
            let finalURL = `${this._baseUrl}${url}`;

            // check for params and append to URL
            if (params && Object.keys(params).length > 0) {
                const paramsObject = Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key])).join('&');
                finalURL = `${finalURL}?${paramsObject}`;
            }

            // fetch!
            const response = await fetch(finalURL, {
                ...init,
                headers,
            });

            if(!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                throw new Error(message);
            }

            return response.json();
        };
    }

    auth() {
        return {
            /**
             * This integration allows you to log in to Plumb's via your external program and Plumb's Api Key.
             * @param options
             */
            autologinLink: (options: AuthAutoLoginRequest): Promise<AuthAutoLoginResponse> => {
                return this.Fetch('/auth/autologin-link', {...options, method: "GET"} as any);
            },
        }
    }

    algorithm() {
        return {
            /**
             * Get algorithm data list with pagination.
             * @param options Optional parameters
             */
            getList: (options?: PlumbsGetListOptions): Promise<PlumbsPagingListResponse<PlumbsGetListOptions>> => {
                return this.Fetch('contents/algorithm', { ...options, method: "GET" } as any);
            },

            /**
             * Get algorithm data for given ID.
             * @param content_id
             */
            getById: (content_id: string): Promise<PlumbsAlgorithmResponse> => {
                return this.Fetch(`contents/algorithm/${content_id}`, { method: "GET" } as any);
            },
        }
    }

    dxTx() {
        return {
            /**
             * Get dx & tx data list with pagination.
             * @param options Optional parameters
             */
            getList: (options?: PlumbsGetListOptions): Promise<PlumbsPagingListResponse<PlumbsDxTxResponse>> => {
                return this.Fetch('contents/clinical-brief', {...options, method: "GET"} as any);
            },

            /**
             * Get dx & tx data for given ID.
             * @param content_id
             */
            getById: (content_id: string): Promise<PlumbsDxTxFullResponse> => {
                return this.Fetch(`contents/clinical-brief/${content_id}`, { method: "GET" } as any);
            },
        }
    }

    monograph() {
        return {
            /**
             * Get monograph data list with pagination.
             * @param options
             */
            getList: (options?: PlumbsGetListOptions): Promise<PlumbsPagingListResponse<PlumbsMonographResponse>> => {
                return this.Fetch('contents/monograph', { params: options, method: "GET"} as any);
            },

            /**
             * Get monograph data for given ID.
             * @param content_id
             * @param options
             */
            getById: (content_id: string, options?: MonographFullRequest): Promise<PlumbsMonographFullResponse> => {
                return this.Fetch(`contents/monograph/${content_id}`, { params: options, method: "GET" } as any);
            },
        }
    }

    patientGuide() {
        return {
            /**
             * Get patient guide data list with pagination.
             * @param options Optional parameters
             */
            getList: (options?: PlumbsGetListOptions): Promise<PlumbsPagingListResponse<PlumbsPatientGuideResponse>> => {
                return this.Fetch('contents/patient-guides', {...options, method: "GET"} as any);
            },

            /**
             * Get patient guide data for given ID.
             * @param content_id
             */
            getById: (content_id: string): Promise<PlumbsPatientGuideFullResponse> => {
                return this.Fetch(`contents/patient-guides/${content_id}`, { method: "GET" } as any);
            },
        }
    }
    medicationGuide() {
        return {
            /**
             * Get medication guide data list with pagination.
             * @param options Optional parameters
             */
            getList: (options?: PlumbsGetListOptions): Promise<PlumbsPagingListResponse<PlumbsMedicationGuideResponse>> => {
                return this.Fetch('contents/veterinary-medication-guide', {...options, method: "GET"} as any);
            },

            /**
             * Get medication guide data for given ID.
             * @param content_id
             */
            getById: (content_id: string): Promise<PlumbsMedicationGuideFullResponse> => {
                return this.Fetch(`contents/veterinary-medication-guide/${content_id}`, { method: "GET" } as any);
            },
        }
    }
}
export default PlumbsClient;