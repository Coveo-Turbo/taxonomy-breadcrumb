# TaxonomyBreadcrumb

Generates a breadcrumb of field values, useful for specifying hierarchy between field values. 

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

1. Install the component into your project.

```
npm i @coveops/taxonomy-breadcrumb
```

2. Use the Component or extend it

Typescript:

```javascript
import { TaxonomyBreadcrumb, ITaxonomyBreadcrumbOptions } from '@coveops/taxonomy-breadcrumb';
```

Javascript

```javascript
const TaxonomyBreadcrumb = require('@coveops/taxonomy-breadcrumb').TaxonomyBreadcrumb;
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/taxonomy-breadcrumb'
```

4. Include the component in your template as follows:

Place the component in your markup:

```html
<div class="CoveoTaxonomyBreadcrumb"></div>
```

## Extending

Extending the component can be done as follows:

```javascript
import { TaxonomyBreadcrumb, ITaxonomyBreadcrumbOptions } from "@coveops/taxonomy-breadcrumb";

export interface IExtendedTaxonomyBreadcrumbOptions extends ITaxonomyBreadcrumbOptions {}

export class ExtendedTaxonomyBreadcrumb extends TaxonomyBreadcrumb {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`