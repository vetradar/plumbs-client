export default class PlumbsApi {
    private readonly _apiKey: string

    constructor(apiKey: string) {
        if (apiKey === undefined || apiKey === null || apiKey === '') {
            throw new Error('API Key is required')
        }

        this._apiKey = apiKey
    }
}
