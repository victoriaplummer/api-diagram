export const apiCards = [
  {
    section: "authorization",
    title: "Authorization",
    description:
      "Allows Webflow users to Authorize your App to make requests to the API on their behalf.",
    docsLink: "https://developers.webflow.com/data/reference/authorization/",
    column: 1,
    icon: "./icons/authorization.svg",
    info: {
      description:
        "Authorization endpoints to access the API on behalf of an Authorized User. To learn more about how to implement OAuth 2.0 authorization flow on your App and manage the authorization instance, see the [OAuth 2.0 implementation guide](https://developers.webflow.com/data/reference/oauth-app).",
      categories: [
        {
          name: "OAuth 2.0 implementation",
          description:
            "Endpoints to implement OAuth 2.0 authorization flow on your App and manage the authorization instance.",
          endpoints: [
            {
              name: "Create authorization",
              description: "Create an authorization instance.",
              method: "GET",
              url: "api.webflow.com/oauth/authorize",
              docsLink:
                "https://developers.webflow.com/data/reference/authorization/create",
            },
            {
              name: "Get access token",
              description:
                "Retrieve an access token for the authorization instance.",
              method: "POST",
              url: "api.webflow.com/oauth/access_token",
              docsLink:
                "https://developers.webflow.com/data/reference/authorization/get",
            },
            {
              name: "Revoke access token",
              description:
                "Revoke an access token that has been issued to your App.",
              method: "POST",
              url: "api.webflow.com/oauth/revoke_authorization",
              docsLink: "https://webflow.com/oauth/authorize",
            },
          ],
        },
      ],
    },
  },
  {
    section: "sites",
    title: "Sites",
    description:
      "Retrieve information about sites. Publish sites to their domains.",
    column: 1,
    icon: "./icons/sites.svg",
    info: {
      description:
        "This resource represents a single Webflow project, which serves as the central organizing entity for all other resources you’ll be able to access within a site.",
      categories: [
        {
          name: "Site information",
          description:
            "Retrieve basic information about the sites the App is authorized to manage with the API.",
          endpoints: [
            {
              name: "List sites",
              description:
                "Retrieve a list of sites the App is authorized to manage with the API.",
              docsLink:
                "https://developers.webflow.com/data/reference/sites/list",
            },
            {
              name: "Get site",
              description: "Retrieve information about a specific site.",
              docsLink:
                "https://developers.webflow.com/data/reference/sites/get",
            },
            {
              name: "Get custom domains",
              description:
                "Get a list of custom domains configured for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/sites/get-custom-domain",
            },
          ],
        },
        {
          name: "Site publishing",
          description:
            "Site publishing allows you to deploy changes made to a site's design, content, and settings to make them live and accessible on the internet. Publishing deploys the latest version of a site to its configured domains.",
          endpoints: [
            {
              name: "Publish site",
              description: "Publish an entire Site to its domains",
              docsLink:
                "https://developers.webflow.com/data/reference/sites/publish",
            },
          ],
        },
      ],
    },
  },
  {
    section: "pages",
    title: "Pages",
    description:
      "Retrieve page information and content, and make updates to pages.",
    column: 2,
    icon: "./icons/pages.svg",
    info: {
      description:
        "Pages are the individual pages that make up a site. A Site can have static pages, as well as dynamically created pages using CMS and/or Ecommerce functionality.",
      categories: [
        {
          name: "Page information",
          description: "Retrieve information about a Page and its metadata.",
          endpoints: [
            {
              name: "List pages",
              description: "Retrieve a list of pages in a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/pages/list",
            },
            {
              name: "Get page metadata",
              description: "Retrieve metadata about a specific page.",
              docsLink:
                "https://developers.webflow.com/data/reference/pages/get-metadata",
            },
            {
              name: "Update page metadata",
              description: "Update metadata for a specific page.",
              docsLink:
                "https://developers.webflow.com/data/reference/pages/update-page-settings",
            },
          ],
        },
        {
          name: "Page content",
          description:
            "Retrieve and update content for specific pages. These endpoints support making updates to specific locales, enabling programmatic localization of your site's content. For more details on implementing localization, see our [comprehensive guide](https://developers.webflow.com/data/docs/working-with-localization).",
          endpoints: [
            {
              name: "Get page content",
              description: "Retrieve content for a specific page.",
              docsLink:
                "https://developers.webflow.com/data/reference/pages/get-content",
            },
            {
              name: "Update page content",
              description: "Update content for a specific page.",
              docsLink:
                "https://developers.webflow.com/data/reference/pages/update-static-content",
            },
          ],
        },
      ],
    },
  },
  {
    section: "custom-code",
    title: "Custom Code",
    description: "Add and maintain custom JavaScript on a Site or Page.",
    docsLink: "https://developers.webflow.com/data/docs/custom-code",
    column: 2,
    icon: "./icons/custom-code.svg",
    info: {
      description:
        "Webflow enables users to [inject custom HTML, CSS, and JavaScript code across their entire site or specific pages.](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags) This allows developers to extend site functionality and implement custom styles beyond what's available natively in Webflow. \n \n Custom code unlocks many possibilities for developers to extend site functionality and implement custom styles beyond what's available natively in Webflow. [Read our guide to learn more about implementing custom code with the API.](https://developers.webflow.com/data/docs/custom-code)",
      categories: [
        {
          name: "Registered scripts",
          description:
            "To add custom code to a site, you must first register the script with the API. This creates a script record in Webflow, which you can then reference when making requests to apply the script to a pagoe or the entire site.",
          endpoints: [
            {
              name: "Get registered scripts",
              description: "Retrieve a list of registered scripts for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code/list",
            },
            {
              name: "Register a hosted script",
              description:
                "Register a script hosted on a third-party site with to the site.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code/register-hosted",
            },
            {
              name: "Register an in-line script",
              description:
                "Register a custom script that will be hosted and served from Webflow's CDN.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code/register-inline",
            },
            {
              name: "Get a custom code blocks",
              description:
                "Retrieve all custom code blocks applied to a site or specific pages.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code/list-custom-code-blocks",
            },
          ],
        },
        {
          name: "Custom Code Blocks: Sites",
          description:
            "Once you've registered a script, you can apply it to the entire site as a custom code block.",
          endpoints: [
            {
              name: "Get custom code blocks",
              description: "Retrieve all custom code blocks applied to a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code-sites/get-custom-code",
            },
            {
              name: "Add or update custom code blocks",
              description: "Apply custom code block(s) to a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code-sites/upsert-custom-code",
            },
            {
              name: "Delete custom code blocks",
              description:
                "Delete all custom code blocks applied to a site by an App.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code-sites/delete-custom-code",
            },
          ],
        },
        {
          name: "Custom Code Blocks: Pages",
          description: "Apply custom code blocks to specific pages.",
          endpoints: [
            {
              name: "Get custom code blocks",
              description: "Retrieve all custom code blocks applied to a page.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code-pages/get-custom-code",
            },
            {
              name: "Add or update custom code blocks",
              description: "Apply custom code block(s) to a page.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code-pages/upsert-custom-code",
            },
            {
              name: "Delete custom code blocks",
              description:
                "Delete all custom code blocks applied to a page by an App.",
              docsLink:
                "https://developers.webflow.com/data/reference/custom-code/custom-code-pages/delete-custom-code",
            },
          ],
        },
      ],
    },
  },
  {
    section: "assets",
    title: "Assets",
    description: "Add assets to a site, or get a list of all existing assets.",
    docsLink: "https://developers.webflow.com/data/docs/working-with-assets",
    column: 2,
    icon: "./icons/assets.svg",
    info: {
      description:
        "Assets are files like images, documents, and other media that can be uploaded and used on a Webflow site. You can use the Assets API to manage these files programmatically.",
      categories: [
        {
          name: "Assets",
          description:
            "Add assets to a site, or get a list of all existing assets.",
          endpoints: [
            {
              name: "List assets",
              description: "Get a list of all existing assets for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/assets/assets/list",
            },
            {
              name: "Get asset",
              description: "Get information about a specific asset.",
              docsLink:
                "https://developers.webflow.com/data/reference/assets/assets/get",
            },
            {
              name: "Create asset metadata",
              description:
                "Create metadata for a specific asset. [To upload an asset, you must first create its metadata record, then upload the asset file itself to AWS.](https://developers.webflow.com/data/docs/working-with-assets",
              docsLink:
                "https://developers.webflow.com/data/reference/assets/assets/create-metadata",
            },
            {
              name: "Update asset metadata",
              description: "Update metadata for a specific asset.",
              docsLink:
                "https://developers.webflow.com/data/reference/assets/assets/update",
            },
            {
              name: "Delete asset",
              description: "Delete a specific asset.",
              docsLink:
                "https://developers.webflow.com/data/reference/assets/assets/delete",
            },
          ],
        },
        {
          name: "Asset folders",
          description: "Manage organization of assets on a site.",
          endpoints: [
            {
              name: "List asset folders",
              description: "Get a list of all asset folders for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/assets/asset-folders/list-folders",
            },
            {
              name: "Get asset folder",
              description: "Get information about a specific asset folder.",
              docsLink:
                "https://developers.webflow.com/data/reference/assets/asset-folders/get-folder",
            },
            {
              name: "Create asset folder",
              description: "Create a new asset folder for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/assets/asset-folders/create-folder",
            },
          ],
        },
      ],
    },
  },
  {
    section: "dynamic-content",
    title: "Dynamic Content",
    description:
      "APIs that allow you to manage the different kinds of dynamic site content available in Webflow.",
    column: 2,
    icon: "./icons/dynamic-content.svg",
    info: {
      description:
        "Dynamic content refers to content generated from data stored in a site's CMS, Ecommerce, and Memberships databases. Unlike static content, this content can be dynamically applied and updated across your site.",
    },
  },
  {
    section: "forms",
    title: "Forms",
    description: "Connect native Webflow forms to external data sources.",
    column: 2,
    icon: "./icons/forms.svg",
    info: {
      description:
        "Webflow Forms provide a robust API for integrating form submissions with external systems. [Forms are site-level elements that capture and store submission data.](https://help.webflow.com/hc/en-us/articles/33961347548563-Forms-overview) Using webhooks or the REST API, developers can: \n1. Receive real-time form submissions \n2. Route data to external databases and services \n3. Trigger automated workflows and notifications \n4. Process form data programmatically. \n\nThe Forms API enables seamless integration between Webflow's native form functionality and your application infrastructure.",
      categories: [
        {
          name: "Form details",
          description: "Get information about a specific form.",
          endpoints: [
            {
              name: "List forms",
              description: "Get a list of all forms for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/forms/list",
            },
            {
              name: "Get form schema",
              description: "Get the schema for a specific form.",
              docsLink:
                "https://developers.webflow.com/data/reference/forms/get",
            },
          ],
        },
        {
          name: "Form submissions",
          description: "Get information about form submissions.",
          endpoints: [
            {
              name: "List form submissions",
              description: "Get a list of all submissions for a form.",
              docsLink:
                "https://developers.webflow.com/data/reference/forms/list-submissions",
            },
            {
              name: "Get form submission",
              description: "Get information about a specific form submission.",
              docsLink:
                "https://developers.webflow.com/data/reference/forms/get-submission",
            },
            {
              name: "Modify form submission",
              description: "Modify a specific form submission.",
              docsLink:
                "https://developers.webflow.com/data/reference/forms/update-submission",
            },
          ],
        },
      ],
    },
  },
  {
    section: "webhooks",
    title: "Webhooks",
    description: "Receive notifications of changes to site-related resources.",
    docsLink: "https://developers.webflow.com/data/docs/working-with-webhooks",
    column: 2,
    icon: "./icons/webhooks.svg",
    info: {
      description:
        "Webhooks enable real-time integration between Webflow and external Apps by sending automated notifications when specific events occur. Webhooks allow you to sync data, trigger workflows, and build powerful automated systems. [View our comprehensive list of supported Webhook Events](https://developers.webflow.com/data/reference/all-events) to learn what notifications you can receive.",
      categories: [
        {
          name: "Webhook management",
          description: "Manage webhooks for a site.",
          endpoints: [
            {
              name: "List webhooks",
              description: "Get a list of all webhooks for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/webhooks/list",
            },
            {
              name: "Get webhook",
              description: "Get information about a specific webhook.",
              docsLink:
                "https://developers.webflow.com/data/reference/webhooks/get",
            },
            {
              name: "Create webhook",
              description: "Create a new webhook for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/webhooks/create",
            },
            {
              name: "Remove webhook",
              description: "Delete a specific webhook.",
              docsLink:
                "https://developers.webflow.com/data/reference/webhooks/delete",
            },
            {
              name: "Webhook events",
              description: "Documentation for supported Webhook Events.",
              docsLink:
                "https://developers.webflow.com/data/reference/all-events",
            },
          ],
        },
      ],
    },
  },
  {
    section: "token",
    title: "Token",
    description: "Get information about the current authorization instance.",
    column: 2,
    icon: "./icons/token.svg",
    info: {
      description:
        "The Token API provides a way to get information about the current authorization instance. This is useful for debugging and for ensuring that your App is authorized to make requests to the API.",
      categories: [
        {
          name: "Token details",
          description:
            "Get information about the current authorization instance.",
          endpoints: [
            {
              name: "Get authorized user",
              description: "Get authorized user details.",
              docsLink:
                "https://developers.webflow.com/data/reference/token/authorized-by",
            },
            {
              name: "Get authorization details",
              description:
                "Get details about the current authorization instance, including scopes and authorized sites",
              docsLink:
                "https://developers.webflow.com/data/reference/token/introspect",
            },
          ],
        },
      ],
    },
  },
  {
    section: "cms",
    title: "CMS",
    description: "Manage Webflow collections and items.",
    docsLink: "https://developers.webflow.com/data/docs/working-with-the-cms",
    column: 3,
    icon: "./icons/cms.svg",
    info: {
      description:
        "Webflow Collections and Items are used to manage content on a site. Collections and Fields are used to manage the structure of the content, and Items are used to manage the content itself.",
    },
  },
  {
    section: "user-accounts",
    title: "User Accounts",
    description: "Manage users and their access to content on a site",
    column: 3,
    icon: "./icons/user-accounts.svg",
    info: {
      description:
        "User Accounts are the individuals who have access to gated content on your site. You can add login functionality, control access with access groups, create paid memberships, and integrate with external tools like CRMs.",
    },
  },
  {
    section: "ecommerce",
    title: "Ecommerce",
    description:
      "Manage ecommerce data such as products, SKUs, inventory and order information.",
    column: 3,
    icon: "./icons/ecommerce.svg",
  },
  {
    section: "collections",
    title: "Collections & Fields",
    description:
      "Create and manage collections and their field schemas to define content structure.",
    docsLink: "https://developers.webflow.com/data/docs/working-with-the-cms",
    column: 4,
    info: {
      description:
        "Collections are the containers for your content. They define the structure of the content, and fields are the individual data points that are stored in the collection.",
      categories: [
        {
          name: "Collections",
          description: "Create and manage collections.",
          docsLink:
            "https://developers.webflow.com/data/reference/cms/collections/",
          endpoints: [
            {
              name: "List collections",
              description: "Get a list of all collections for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collections/list",
            },
            {
              name: "Get collection details",
              description:
                "Get information about a specific collection including its fields.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collections/get",
            },
            {
              name: "Create collection",
              description: "Create a new collection for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collections/create",
            },
            {
              name: "Delete collection",
              description: "Delete a specific collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collections/delete",
            },
          ],
        },
        {
          name: "Fields",
          description: "Create and manage fields for a collection.",
          docsLink: "https://developers.webflow.com/data/reference/cms/fields/",
          endpoints: [
            {
              name: "Create field",
              description: "Create a new field for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-fields/create",
            },
            {
              name: "Update field",
              description: "Update a specific field.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-fields/update",
            },
            {
              name: "Delete field",
              description: "Delete a specific field.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-fields/delete",
            },
          ],
        },
      ],
    },
  },
  {
    section: "items",
    title: "Items",
    description: "Create and manage collection item details.",
    docsLink: "https://developers.webflow.com/data/docs/working-with-the-cms",
    column: 4,
    info: {
      description:
        "Items are the content of a collection. They are the individual records that are stored in the collection. Additionally, Items can be created as staged items, which are not yet published to the site - or as live items, which are published immediately to the site.",
      categories: [
        {
          name: "Staged items",
          description: "Get information about staged items.",
          endpoints: [
            {
              name: "List collection items",
              description: "Get a list of all staged items for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/staged-items/list-items",
            },
            {
              name: "Get collection item",
              description: "Get information about a specific staged item.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/staged-items/get-item",
            },
            {
              name: "Create collection item(s)",
              description: "Create a new staged item for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/staged-items/create-item",
            },
            {
              name: "Create localized collection item(s)",
              description:
                "Create collection items that are replicated across specified locales",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/staged-items/create-items",
            },
            {
              name: "Update collection item(s)",
              description: "Update a staged item for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/staged-items/update-items",
            },
            {
              name: "Delete collection item(s)",
              description: "Delete a staged item for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/staged-items/delete-items",
            },
            {
              name: "Publish collection item(s)",
              description: "Publish a staged item for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/staged-items/publish-item",
            },
          ],
        },
        {
          name: "Live items",
          description: "Get information about live items.",
          endpoints: [
            {
              name: "List live collection items",
              description: "Get a list of all live items for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/live-items/list-items-live",
            },
            {
              name: "Get live collection item",
              description: "Get information about a specific live item.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/live-items/get-item-live",
            },
            {
              name: "Create live collection item(s)",
              description: "Create a live item for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/live-items/create-item-live",
            },
            {
              name: "Update live collection item(s)",
              description: "Update a live item for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/live-items/update-items-live",
            },
            {
              name: "Delete live collection item(s)",
              description: "Delete a live item for a collection.",
              docsLink:
                "https://developers.webflow.com/data/reference/cms/collection-items/live-items/delete-items-live",
            },
          ],
        },
      ],
    },
  },
  {
    section: "users",
    title: "Users",
    description: "Create and manage users on a site",
    column: 4,
    info: {
      description:
        "Users are individuals who can access gated content on your site through User Accounts. You can add login functionality, control access with access groups, create paid memberships, and integrate with external tools like CRMs.",
      categories: [
        {
          name: "Users",
          description: "Create and manage users on a site.",
          endpoints: [
            {
              name: "List users",
              description: "Get a list of all users for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/users/users/list",
            },
            {
              name: "Get user",
              description: "Get information about a specific user.",
              docsLink:
                "https://developers.webflow.com/data/reference/users/users/get",
            },
            {
              name: "Create and invite user",
              description: "Create a new user for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/users/users/invite",
            },
            {
              name: "Update user",
              description: "Update a specific user.",
              docsLink:
                "https://developers.webflow.com/data/reference/users/users/update",
            },
            {
              name: "Delete user",
              description: "Delete a specific user.",
              docsLink:
                "https://developers.webflow.com/data/reference/users/users/delete",
            },
          ],
        },
      ],
    },
  },
  {
    section: "access-groups",
    title: "Access Groups",
    description: "List available Access Groups for users",
    column: 4,
    info: {
      description:
        "Access Groups are used to control access to gated content on your site. You can create access groups, add users to them, and control their access to content.",
      categories: [
        {
          name: "Access Groups",
          description: "List available Access Groups for users",
          docsLink:
            "https://developers.webflow.com/data/reference/users/access-groups/list",
          endpoints: [
            {
              name: "List access groups",
              description: "Get a list of all access groups for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/users/access-groups/list",
            },
          ],
        },
      ],
    },
  },
  {
    section: "ecommerce-settings",
    title: "eCommerce Settings",
    description: "List eCommerce settings to find currency data.",
    column: 4,
    info: {
      description:
        "eCommerce Settings are used to manage the settings for your ecommerce site. You can find the currency data for your site here.",
      categories: [
        {
          name: "eCommerce Settings",
          description: "List eCommerce settings to find currency data.",
          docsLink:
            "https://developers.webflow.com/data/reference/ecommerce/settings/",
        },
      ],
    },
  },
  {
    section: "products",
    title: "Products & SKUs",
    description: "Create and manage eCommerce products.",
    column: 4,
    info: {
      description:
        "Products are the items that are sold on your site. SKUs are the specific variations of a product that are available for sale.",
      categories: [
        {
          name: "Products",
          description: "Create and manage eCommerce products.",
          docsLink:
            "https://developers.webflow.com/data/reference/ecommerce/products/",
          endpoints: [
            {
              name: "List products",
              description: "Get a list of all products for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/products/list",
            },
            {
              name: "Get product",
              description: "Get information about a specific product.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/products/get",
            },
            {
              name: "Create product & SKU",
              description: "Create a new product and SKU for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/products/create",
            },
            {
              name: "Update product",
              description: "Update a product and SKU for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/products/update",
            },
          ],
        },
        {
          name: "SKUs",
          description: "Create and manage SKUs for a product.",
          docsLink:
            "https://developers.webflow.com/data/reference/ecommerce/skus/",
          endpoints: [
            {
              name: "Create SKU",
              description: "Create a new SKU for a product.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/products/create-sku",
            },
            {
              name: "Update SKU",
              description: "Update a specific SKU for a product.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/products/update-sku",
            },
          ],
        },
      ],
    },
  },
  {
    section: "orders",
    title: "Orders",
    description: "Manage Orders and eCommerce operations.",
    column: 4,
    info: {
      description:
        "Orders are the transactions that are made on your site. You can retrieve and update orders, and manage the status of the order.",
      categories: [
        {
          name: "Orders",
          description: "Manage Orders and eCommerce operations.",
          docsLink:
            "https://developers.webflow.com/data/reference/ecommerce/orders/",
          endpoints: [
            {
              name: "List orders",
              description: "Get a list of all orders for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/orders/list",
            },
            {
              name: "Get order",
              description: "Get information about a specific order.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/orders/get",
            },
            {
              name: "Update order",
              description: "Update a specific order.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/orders/update",
            },
            {
              name: "Fufill order",
              description: "Fufill a specific order.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/orders/update-fulfill",
            },
            {
              name: "Unfufill order",
              description: "Unfufill a specific order.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/orders/update-unfulfill",
            },
            {
              name: "Refund order",
              description: "Refund a specific order.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/orders/refund",
            },
          ],
        },
      ],
    },
  },
  {
    section: "inventory",
    title: "Inventory",
    description: "Manage eCommerce item inventory.",
    column: 4,
    info: {
      description:
        "Inventory is the stock of items that are available for sale on your site. You can retrieve and update inventory, and manage the status of the inventory.",
      categories: [
        {
          name: "Inventory",
          description: "Manage eCommerce item inventory.",
          docsLink:
            "https://developers.webflow.com/data/reference/ecommerce/inventory/",
          endpoints: [
            {
              name: "List inventory",
              description: "Get a list of all inventory for a site.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/inventory/list",
            },
            {
              name: "Update item inventory",
              description: "Update the inventory of a specific item.",
              docsLink:
                "https://developers.webflow.com/data/reference/ecommerce/inventory/update",
            },
          ],
        },
      ],
    },
  },
];

export const connections = [
  {
    type: "single",
    from: "authorization",
    to: "sites",
    fromSide: "bottom",
    toSide: "top",
    color: "#4353FF",
  },
  {
    type: "tree",
    trunk: {
      from: "sites",
      branches: [
        "pages",
        "custom-code",
        "assets",
        "dynamic-content",
        "forms",
        "webhooks",
        "token",
      ],
      startColumn: 1,
    },
  },
  {
    type: "tree",
    trunk: {
      from: "dynamic-content",
      branches: ["cms", "user-accounts", "ecommerce"],
      startColumn: 2,
    },
  },
  {
    type: "tree",
    trunk: {
      from: "ecommerce",
      branches: ["ecommerce-settings", "products", "orders", "inventory"],
      startColumn: 3,
    },
  },
  {
    type: "tree",
    trunk: {
      from: "user-accounts",
      branches: ["users", "access-groups"],
      startColumn: 3,
    },
  },
  {
    type: "tree",
    trunk: {
      from: "cms",
      branches: ["collections", "items"],
      startColumn: 3,
    },
  },
];
