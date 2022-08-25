import { createClient } from "urql";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN;
const version = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION;
const token = process.env.NEXT_PUBLIC_SHOPIFY_FRONT_TOKEN;

if (!domain || !version || !token) {
	throw new Error('shopifyの環境変数を設定してください!');
}

const shopifyClient = createClient({
  url: `https://${domain}/api/${version}/graphql.json`,
	fetchOptions: () => ({
    headers: {
      'X-Shopify-Storefront-Access-Token': token,
      'Content-Type': 'application/json',
	  },
	}),
});

export default shopifyClient;