import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>This is the Home Page.</p>
			<StaticImage
				alt="Window 11 user"
				src="../images/laptop.jpeg"
			></StaticImage>
		</Layout>
	);
};

export default IndexPage;
