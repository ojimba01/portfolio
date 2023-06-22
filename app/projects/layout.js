"use client";

import { Suspense, useState } from "react";
import useSWR from "swr";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
// import { Filter } from "./components/Filter";
import { fetcher } from "utils/fetcher";
import Error from "../error";
import { Projects } from "./components/Projects";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_ALL_PROJECTS}`;

export default function Page() {
	const [category, setCategory] = useState(undefined);

	const filterUrl = category ? `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_PROJECTS.replace('$categoryID', `'${category}'`)}` : url;

	const fetchUrl = category ? filterUrl : url;
	const { data, error } = useSWR(fetchUrl, fetcher);
	const filteredProjects = data?.result;

	const onClick = (catName) => setCategory(catName);
	console.log(category)
	console.log(filterUrl)

	if (error) {
		return <div className="container-md">Error loading projects...</div>;
	}

	return (
		<div className="container-md">
			<section id="projects" className="section">
				<HeadingDivider title="Relevant projects" />

				{/* <Filter onClick={onClick} /> */}

				<Suspense
					fallback={
						<div className="flex-center">
							<Loader />
						</div>
					}
				>
					<ErrorBoundary FallbackComponent={Error}>
						{filteredProjects === undefined ? (
							// Loading state
							<div className="flex-center">
								<Loader />
							</div>
						) : filteredProjects.length === 0 ? (
							// Empty state
							<div className="flex-center">
								<h3 className="text-2xl">No projects found in {category} category</h3>
							</div>
						) : (
							<Projects projects={filteredProjects} />
						)}
					</ErrorBoundary>
				</Suspense>
			</section>
		</div>
	);
}

