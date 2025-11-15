import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { getBlogPost, getAllBlogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]">
            {/* Back Link */}
            <Link href="/blog" className="text-primary text-[0.875rem] font-[500] hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>

          {/* Article Header */}
          <article className="max-w-4xl">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-customGrayAlt text-[0.875rem]">•</span>
                <span className="text-customGrayAlt text-[0.875rem]">{post.date}</span>
              </div>

              <h1 className="text-white text-[2.5rem] md:text-[4rem] font-[700] leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-customGrayAlt text-[1.125rem] leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-10 border border-superGray">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-[600] prose-headings:uppercase
                prose-p:text-customGrayAlt prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-white prose-strong:font-[600]
                prose-ul:text-customGrayAlt prose-ul:list-disc prose-ul:ml-6
                prose-li:mb-2
                prose-h2:text-[2rem] prose-h2:mb-4 prose-h2:mt-10
                prose-h3:text-[1.5rem] prose-h3:mb-3 prose-h3:mt-8"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </article>

          {/* Related Posts */}
          {otherPosts.length > 0 && (
            <div className="mt-20 pt-16 border-t border-superGray max-w-4xl">
              <h2 className="text-white text-[2rem] font-[600] uppercase mb-8">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-lightDark rounded-lg overflow-hidden border border-superGray hover:border-primary transition-all duration-300"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-superGray">
                      <img
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-primary text-[0.75rem] font-[600] uppercase tracking-wider mb-2 inline-block">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-white text-[1.125rem] font-[600] group-hover:text-primary transition-colors leading-tight">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
