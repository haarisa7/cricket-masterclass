import { o as programmesBySlug } from "./_ssr/pages-DXtNne_f.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-qiLgkn4m.js
var $$splitComponentImporter = () => import("./_slug-ift2D-rq.mjs");
var Route = createFileRoute("/programmes/$slug")({
	loader: ({ params }) => {
		const programme = programmesBySlug.get(params.slug);
		if (!programme) throw notFound();
		return { programme };
	},
	head: ({ loaderData }) => {
		const programme = loaderData?.programme;
		if (!programme) return {};
		const title = `${programme.name} — Masterclass Cricket`;
		const description = `${programme.promise} ${programme.intro}`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
