import { Axios } from 'axios'
import type {
    AuthAutoLoginRequest,
    AuthAutoLoginResponse,
    PlumbsGetListOptions,
    PlumbsAlgorithmResponse,
    PlumbsDxTxResponse,
    PlumbsPagingListResponse,
    PlumbsMonographResponse,
    PlumbsDxTxFullResponse,
    PlumbsMonographFullResponse,
    PlumbsPatientGuideResponse,
    PlumbsPatientGuideFullResponse,
    PlumbsMedicationGuideFullResponse,
    PlumbsMedicationGuideResponse,
} from './types'

class PlumbsClient {
    private readonly _apiKey: string
    private readonly _baseUrl: string = 'https://app.plumbs.com/api/v2'
    private axios: Axios

    /**
     * Plumbs API Client
     * @param apiKey Your Plumb's API Key
     */
    constructor(apiKey: string) {
        if (apiKey === undefined || apiKey === null || apiKey === '') {
            throw new Error('API Key is required')
        }

        this._apiKey = apiKey

        this.axios = new Axios({
            baseURL: this._baseUrl,
            headers: {
                Authorization: `Api-Key ${this._apiKey}`,
            },
        })
    }

    auth() {
        return {
            /**
             * This integration allows you to sign into Plumb's via your external program and Plumb's Api Key.
             * @param targetUrl
             */
            autologinLink: (targetUrl: string) => {
                return this.axios.post<
                    AuthAutoLoginRequest,
                    AuthAutoLoginResponse
                >('/auth/autologin-link', { targetUrl })
            },
        }
    }

    algorithm() {
        return {
            /**
             * Get algorithm data list with pagination.
             * @param options Optional parameters
             */
            getList: (options?: PlumbsGetListOptions) => {
                return this.axios.get<
                    PlumbsPagingListResponse<PlumbsGetListOptions>
                >('contents/algorithm', { params: options })
            },

            /**
             * Get algorithm data for given ID.
             * @param content_id
             */
            getById: (content_id: string) => {
                return this.axios.get<PlumbsAlgorithmResponse>(
                    `contents/algorithm/${content_id}`,
                )
            },
        }
    }

    dxtx() {
        return {
            /**
             * Get dx & tx data list with pagination.
             * @param options Optional parameters
             */
            getList: (options?: PlumbsGetListOptions) => {
                return this.axios.get<
                    PlumbsPagingListResponse<PlumbsDxTxResponse>
                >('contents/clinical-brief/', { params: options })
            },

            /**
             * Get dx & tx data for given ID.
             * @param content_id
             */
            getById: (content_id: string) => {
                return this.axios.get<PlumbsDxTxFullResponse>(
                    `contents/clinical-brief/${content_id}`,
                )
            },
        }
    }

    monograph() {
        return {
            /**
             * Get monograph data list with pagination.
             * @param options Optional parameters
             */
            getList: (options?: PlumbsGetListOptions) => {
                return this.axios.get<
                    PlumbsPagingListResponse<PlumbsMonographResponse>
                >('contents/monograph/', { params: options })
            },

            /**
             * Get monograph data for given ID.
             * @param content_id
             */
            getById: (content_id: string) => {
                return this.axios.get<PlumbsMonographFullResponse>(
                    `contents/monograph/${content_id}`,
                )
            },
        }
    }

    patientGuide() {
        return {
            /**
             * Get patient guide data list with pagination.
             * @param options Optional parameters
             */
            getList: (options?: PlumbsGetListOptions) => {
                return this.axios.get<
                    PlumbsPagingListResponse<PlumbsPatientGuideResponse>
                >('contents/patient-guides/', { params: options })
            },

            /**
             * Get patient guide data for given ID.
             * @param content_id
             */
            getById: (content_id: string) => {
                return this.axios.get<PlumbsPatientGuideFullResponse>(
                    `contents/patient-guides/${content_id}`,
                )
            },
        }
    }

    medicationGuide() {
        return {
            /**
             * Get medication guide data list with pagination.
             * @param options Optional parameters
             */
            getList: (options?: PlumbsGetListOptions) => {
                return this.axios.get<
                    PlumbsPagingListResponse<PlumbsMedicationGuideResponse>
                >('contents/veterinary-medication-guide/', { params: options })
            },

            /**
             * Get medication guide data for given ID.
             * @param content_id
             */
            getById: (content_id: string) => {
                return this.axios.get<PlumbsMedicationGuideFullResponse>(
                    `contents/veterinary-medication-guide/${content_id}`,
                )
            },
        }
    }
}

export default PlumbsClient
