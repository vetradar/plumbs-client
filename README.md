# Plumbs Api Client

This client provides a wrapper around the Plumb's V2 API

-   [Documentation](https://app.plumbs.com/api/v2/docs/)
-   API Keys are available via manual request

## Example Usage

```js
const plumbs = new PlumbsApi('api-key')

const autologin = plumbs.auth().autologinLink('https://myapp.com')

const algo = plumbs.algorithm().getList()
const algoById = plumbs.algorithm().getById('algo-id')

const dxtx = plumbs.dxtx().getList()
const dxtxById = plumbs.dxtx().getById('dxtx-id')

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
