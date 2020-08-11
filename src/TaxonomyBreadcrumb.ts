import { 
    Component, 
    IComponentBindings, 
    ComponentOptions,
    IFieldOption,
    IQueryResult,
    $$
} 
from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface ITaxonomyBreadcrumbOptions {
    fields: IFieldOption[];
    separator: string;
}

@lazyComponent
export class TaxonomyBreadcrumb extends Component {
    static ID = 'TaxonomyBreadcrumb';
    static options: ITaxonomyBreadcrumbOptions = {
        fields: ComponentOptions.buildListOption<IFieldOption>({defaultValue: []}),
        separator: ComponentOptions.buildStringOption({defaultValue: '>'}),
    };
    breadcrumbs: string[];

    constructor(public element: HTMLElement, public options: ITaxonomyBreadcrumbOptions, public bindings: IComponentBindings, public result: IQueryResult) {
        super(element, TaxonomyBreadcrumb.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, TaxonomyBreadcrumb, options);

        this.build();
    }

    protected build() {
        if (this.options.fields.length == 0) {
            this.logger.error('No fields specified');
            $$(this.element).remove();
        } else {
            this.generateBreadcrumbsArray();
            this.renderBreadcrumbs();
        }
    }

    protected generateBreadcrumbsArray() {
        const maxDepth = this.options.fields.length;
        let taxonomies = [];
        this.breadcrumbs = [];
        
        this.options.fields.forEach( (field) => {
            let fieldValue = Coveo.Utils.getFieldValue(this.result, field as string);
            if (fieldValue) {
                // Handle case where field is single-valued
                if (typeof fieldValue == "string") {
                    taxonomies.push([fieldValue]);
                // Handle case where field is multi-valued
                } else {
                    taxonomies.push(fieldValue);
                }
            }
        });

        if (taxonomies.length > 0) {
            this.recursiveHelper(taxonomies, [], 0, maxDepth);
        }
    }

    protected recursiveHelper(taxonomies, subArray, curDepth, maxDepth) {
        // Only adds permutations of length maxDepth
        if (curDepth == maxDepth || !(taxonomies[curDepth]) || taxonomies[curDepth].length == 0) {
            this.breadcrumbs.push(subArray.join(this.options.separator));
            return;
        };

        let copiedTaxonomies = taxonomies.map((taxonomy) => {
            return taxonomy.slice();
        });

        // Branches out i times equal to the length of the current array
        for (let i = 0; i < copiedTaxonomies[curDepth].length; i++) {
            let copiedSubArray = subArray.slice(); 
            const curElement = copiedTaxonomies[curDepth][i]
            copiedSubArray.push(curElement);

            // Call the next recursion layer, adding 1 to depth
            this.recursiveHelper(copiedTaxonomies, copiedSubArray, curDepth+1, maxDepth);
        }        
    }

    protected renderBreadcrumbs() {
        this.breadcrumbs.forEach( (breadcrumb) => {
            const breadcrumbElement = $$('div', { className: 'breadcrumb' }, breadcrumb).el;
            $$(this.element).append(breadcrumbElement);
        })
    }
}