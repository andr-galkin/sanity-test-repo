import client from "../../../client";
import groq from "groq";
import Main from "../../components/Main";

const ContentPage = (props: JSX.IntrinsicAttributes) => {
  return <Main {...props} />;
};

const query = groq`*[_type == "portfolio" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->{title, description, "key": _id},
  "authorImage": author->image,
  "authorBio": author->bio,
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "portfolio" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  const { slug = "" } = context.params;
  const portfolioData = await client.fetch(query, { slug });

  return {
    props: {
      portfolioData,
    },
  };
}

export default ContentPage;
