type BlogPostPageProps = {
    params: {
        slug: string;
        dofo: number;
    };
};

export default async function BlogPostPage({params}: BlogPostPageProps) {
    const { slug } = await params;
    const { dofo } = await params;
    return (
        <>
        
            <h1>{slug} Blog Detail page</h1>
        </>
    )
}