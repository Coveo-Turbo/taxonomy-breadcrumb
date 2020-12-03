# TaxonomyBreadcrumb

Generates the appropriate permutation of breadcrumbs based on the specified field values, useful when needing to specify a hierarchy between those values.

This component is a result template component (see [Result Templates](https://docs.coveo.com/en/413/)).

This component handles both single and multi-value fields.

For example, using the following fields
- @level1 = ['a', 'b']
- @level2 = ['c', 'd']

along with the default separator will generate the following breadcrumbs based on the values of the specified fields:
- a>c
- a>d
- b>c
- b>d

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

### Testing the Component

For quick testing, you can add the script from unpkg:

```html
<script src="https://unpkg.com/@coveops/taxonomy-breadcrumb@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

### Using the Component

1. Install the component into your project.

    ```
    npm i @coveops/taxonomy-breadcrumb
    ```

2. Use the Component or extend it:

    Typescript

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
    <div class="CoveoTaxonomyBreadcrumb" data-fields="@field1,@field2"></div>
    ```
## Options

The following options can be configured:

| Option | Required | Type | Default | Notes |
| --- | --- | --- | --- | --- |
| `fields` | Yes | IFieldOption[ ] | | The field(s) used to create the breadcrumb |
| `separator` | No | string | `>` | The separator inserted between field values in the breadcrumb |

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
