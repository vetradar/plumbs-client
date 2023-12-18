# Plumbs Api Client

This client provides a wrapper around the Plumb's V2 API

-   [Documentation](https://app.plumbs.com/api/v2/docs/)
-   API Keys are available via manual request

## Example Usage

```js
const plumbs = new PlumbsClient() // can either use an env varblae PLUMBS_API_KEY or can pass in via the constructor

const autologin = plumbs.auth().autologinLink('https://myapp.com')

const algo = plumbs.algorithm().getList()
const algoById = plumbs.algorithm().getById('algo-id')

const dxtx = plumbs.dxTx().getList()
const dxtxById = plumbs.dxTx().getById('dxtx-id')

const monograph = plumbs.monograph().getList()
const monographById = plumbs.monograph().getById('monograph-id')

const patientGuide = plumbs.patientGuide().getList()
const patientGuideById = plumbs.patientGuide().getById('patient-guide-id')

const medicationGuide = plumbs.medicationGuide().getList()
const medicationGuideById = plumbs
    .medicationGuide()
    .getById('medication-guide-id')
```

## Contribution

### Install

`yarn`

### Develop

`yarn dev`

### Build

Build is done through `tsc` and is output into the `lib` directory

`yarn build`

### Format

`yarn prettier`

### Bundling

Bundling is done through `tsup` and it output into the `dist` directory.

`yarn bundle`

Bundle to:

-   `cjs`
-   `esm`

### Example

`cd example && yarn install`

Edit the `index.ts` file to include your API key

`yarn run dev`
